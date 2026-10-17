import { useCallback, useEffect, useState } from 'react';
import api from '../services/api.js';

// Loads one published article from GET /api/insights/:slug. `notFound` is true for a 404.
export default function useInsight(slug) {
  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notFound, setNotFound] = useState(false);

  const load = useCallback(
    async (signal) => {
      setLoading(true);
      setError('');
      setNotFound(false);
      setInsight(null);
      try {
        const { data } = await api.get(`/insights/${encodeURIComponent(slug)}`, { signal });
        setInsight(data.data);
      } catch (err) {
        if (err.code === 'ERR_CANCELED' || err.name === 'CanceledError') return;
        if (err.status === 404) setNotFound(true);
        else setError(err.message || 'Could not load this article.');
      } finally {
        if (!signal?.aborted) setLoading(false);
      }
    },
    [slug]
  );

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal);
    return () => controller.abort();
  }, [load]);

  return { insight, loading, error, notFound, reload: () => load() };
}
