import rateLimit from 'express-rate-limit';

const tooMany = (message) => (req, res) => res.status(429).json({ success: false, message });

export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 200,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  handler: tooMany('Too many requests. Please try again later.'),
});

export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  handler: tooMany('You have submitted too many inquiries. Please try again after some time.'),
});
