import { useCallback, useEffect, useState } from 'react';
import api from '../services/api.js';

// Loads published insight summaries from GET /api/insights.
export default function useInsights() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = useCallback(async (signal) => {
    setLoading(true);
    setError('');
    try {
      const { data } = await api.get('/insights', { signal });
      setInsights(data.data);
    } catch (err) {
      if (err.code === 'ERR_CANCELED' || err.name === 'CanceledError') return;
      setError(err.message || 'Could not load articles.');
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal);
    return () => controller.abort();
  }, [load]);

  return { insights, loading, error, reload: () => load() };
}
