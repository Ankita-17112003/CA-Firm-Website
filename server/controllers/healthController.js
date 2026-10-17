import mongoose from 'mongoose';

export const getHealth = (req, res) => {
  const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  const database = states[mongoose.connection.readyState] || 'unknown';
  const ok = database === 'connected';
  res.status(ok ? 200 : 503).json({
    success: ok,
    message: ok ? 'API is running' : 'API is running but database is not connected',
    data: { status: ok ? 'ok' : 'degraded', database, uptime: Math.round(process.uptime()) },
  });
};
