import env from '../config/env.js';

export default function errorHandler(err, req, res, _next) {
  let status = err.statusCode || 500;
  let message = err.message || 'Internal server error';
  let errors = err.errors;

  if (err.name === 'ValidationError' && err.errors && !Array.isArray(err.errors)) {
    status = 422;
    message = 'Validation failed';
    errors = Object.values(err.errors).map((e) => ({ field: e.path, message: e.message }));
  } else if (err.name === 'CastError') {
    status = 400;
    message = `Invalid value for ${err.path}`;
  } else if (err.code === 11000) {
    status = 409;
    message = 'A record with this value already exists';
  } else if (err.type === 'entity.parse.failed') {
    status = 400;
    message = 'Malformed JSON in request body';
  } else if (err.type === 'entity.too.large') {
    status = 413;
    message = 'Request body too large';
  } else if (err.message === 'Not allowed by CORS') {
    status = 403;
  } else if (!err.isOperational && status === 500) {
    console.error('Unhandled error:', err);
    if (env.isProduction) message = 'Something went wrong on our side. Please try again later.';
  }

  const body = { success: false, message };
  if (errors) body.errors = errors;
  if (!env.isProduction && status === 500) body.stack = err.stack;
  res.status(status).json(body);
}
