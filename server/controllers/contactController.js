import asyncHandler from '../utils/asyncHandler.js';
import { createContact } from '../services/contactService.js';

// POST /api/contact
// Responds 201 only after the document is actually saved to MongoDB.
export const submitContact = asyncHandler(async (req, res) => {
  const saved = await createContact(req.body);
  res.status(201).json({
    success: true,
    message: 'Thank you. Your inquiry has been received and saved. The firm will get back to you.',
    data: { id: saved._id },
  });
});
