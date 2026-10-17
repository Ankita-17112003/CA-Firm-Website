import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import { listPublishedInsights, findPublishedBySlug } from '../services/insightService.js';

export const getInsights = asyncHandler(async (req, res) => {
  const insights = await listPublishedInsights();
  res.json({ success: true, count: insights.length, data: insights });
});

export const getInsightBySlug = asyncHandler(async (req, res) => {
  const insight = await findPublishedBySlug(req.params.slug);
  if (!insight) throw new ApiError(404, 'Article not found');
  res.json({ success: true, data: insight });
});
