import Insight from '../models/Insight.js';

export function listPublishedInsights() {
  return Insight.find({ isPublished: true }).select('-content').sort({ publishedAt: -1 }).lean();
}

export function findPublishedBySlug(slug) {
  return Insight.findOne({ slug, isPublished: true }).lean();
}
