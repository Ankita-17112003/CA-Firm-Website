import mongoose from 'mongoose';
import { SERVICE_OPTIONS } from '../utils/constants.js';

const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: [true, 'Full name is required'], trim: true, minlength: 2, maxlength: 100 },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      maxlength: 254,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 20,
      match: [/^\+?[0-9\s-]{7,18}$/, 'Please provide a valid phone number'],
    },
    service: { type: String, required: [true, 'Please select a service'], enum: SERVICE_OPTIONS },
    message: { type: String, required: [true, 'Message is required'], trim: true, minlength: 10, maxlength: 2000 },
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

contactSchema.index({ createdAt: -1 });
contactSchema.index({ email: 1 });

export default mongoose.model('Contact', contactSchema);
