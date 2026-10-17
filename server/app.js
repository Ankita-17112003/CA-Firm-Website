import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import env from './config/env.js';
import routes from './routes/index.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';
import { globalLimiter } from './middleware/rateLimiters.js';

const app = express();

// Required on Render/Heroku-style hosts so rate limiting sees the real client IP.
app.set('trust proxy', 1);

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      // Allow non-browser clients (curl, health checks) that send no Origin header.
      if (!origin || env.frontendOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST'],
  })
);
app.use(express.json({ limit: '10kb' }));
app.use('/api', globalLimiter, routes);
app.use(notFound);
app.use(errorHandler);

export default app;
