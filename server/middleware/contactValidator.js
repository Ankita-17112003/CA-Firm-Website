import { body } from 'express-validator';
import { SERVICE_OPTIONS } from '../utils/constants.js';
import { sanitizeText } from '../utils/sanitize.js';

export const contactRules = [
  body('fullName').customSanitizer(sanitizeText).isLength({ min: 2, max: 100 }).withMessage('Full name must be 2-100 characters'),
  body('email')
    .customSanitizer(sanitizeText)
    .isEmail().withMessage('Please provide a valid email address')
    .isLength({ max: 254 }).withMessage('Email is too long')
    .normalizeEmail({ gmail_remove_dots: false }),
  body('phone')
    .optional({ values: 'falsy' })
    .customSanitizer(sanitizeText)
    .matches(/^\+?[0-9\s-]{7,18}$/).withMessage('Please provide a valid phone number'),
  body('service').customSanitizer(sanitizeText).isIn(SERVICE_OPTIONS).withMessage('Please select a valid service'),
  body('message').customSanitizer(sanitizeText).isLength({ min: 10, max: 2000 }).withMessage('Message must be 10-2000 characters'),
];
