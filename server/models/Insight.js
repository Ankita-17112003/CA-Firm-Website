import mongoose from 'mongoose';
import { INSIGHT_CATEGORIES } from '../utils/constants.js';

const insightSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 160 },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/ },
    excerpt: { type: String, required: true, trim: true, maxlength: 300 },
    category: { type: String, required: true, enum: INSIGHT_CATEGORIES },
    // Each array item is one paragraph; a line starting with "## " is rendered as a sub-heading by the client.
    content: { type: [String], required: true, validate: (v) => v.length > 0 },
    author: { type: String, default: '[Author Name]', trim: true, maxlength: 100 },
    readTime: { type: Number, default: 4, min: 1 },
    isPublished: { type: Boolean, default: true },
    isPlaceholder: { type: Boolean, default: false },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

insightSchema.index({ isPublished: 1, publishedAt: -1 });
insightSchema.index({ category: 1 });

export default mongoose.model('Insight', insightSchema);
