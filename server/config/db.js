import mongoose from 'mongoose';
import env from './env.js';

mongoose.set('strictQuery', true);

export async function connectDB() {
  try {
    const conn = await mongoose.connect(env.mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log(`MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (error) {
    // Never print the URI: it may contain credentials.
    throw new Error(
      `MongoDB connection failed: ${error.message}. Check MONGODB_URI and, for Atlas, your IP access list.`
    );
  }
}

mongoose.connection.on('error', (err) => console.error('MongoDB runtime error:', err.message));
mongoose.connection.on('disconnected', () => console.warn('MongoDB disconnected'));
