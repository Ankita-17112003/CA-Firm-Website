import { Router } from 'express';
import { submitContact } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiters.js';
import { contactRules } from '../middleware/contactValidator.js';
import validate from '../middleware/validate.js';

const router = Router();
router.post('/', contactLimiter, contactRules, validate, submitContact);
export default router;
