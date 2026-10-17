import env from './config/env.js'; // validates env vars first and throws a clear error if any are missing
import app from './app.js';
import { connectDB } from './config/db.js';

async function start() {
  await connectDB();
  const server = app.listen(env.port, () => {
    console.log(`Server running in ${env.nodeEnv} mode on port ${env.port}`);
  });

  const shutdown = (signal) => {
    console.log(`${signal} received, shutting down`);
    server.close(() => process.exit(0));
  };
  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

start().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
