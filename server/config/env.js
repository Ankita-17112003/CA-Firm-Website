import dotenv from 'dotenv';

dotenv.config();

const required = ['MONGODB_URI', 'FRONTEND_URL'];
const missing = required.filter((key) => !process.env[key] || !process.env[key].trim());

if (missing.length > 0) {
  throw new Error(
    `Missing required environment variable(s): ${missing.join(', ')}. ` +
      'Copy server/.env.example to server/.env and fill in the values.'
  );
}

const env = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGODB_URI.trim(),
  frontendOrigins: process.env.FRONTEND_URL.split(',')
    .map((origin) => origin.trim().replace(/\/$/, ''))
    .filter(Boolean),
};

env.isProduction = env.nodeEnv === 'production';

export default env;
