import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import Insight from '../models/Insight.js';

const DISCLAIMER =
  'Placeholder content: this article is a sample for layout purposes only and is not legal, tax or financial advice. Replace it with reviewed content from the firm.';

const insights = [
  {
    title: 'Understanding the Basics of Income Tax Planning',
    slug: 'understanding-basics-of-income-tax-planning',
    excerpt: 'A general introduction to why planning ahead of the financial year-end helps individuals and businesses stay organised.',
    category: 'Taxation',
    publishedAt: new Date('2026-01-10'),
    content: [
      DISCLAIMER,
      '## Why plan early?',
      'Tax planning is most useful when it is done throughout the year rather than in the last few weeks. Early planning gives time to gather documents, review income sources and understand which options may be available.',
      '## Documents worth keeping organised',
      'Income statements, investment proofs, loan certificates and expense records are commonly needed while preparing returns. Keeping them in one place reduces last-minute stress.',
      '## Speak to a professional',
      'Tax rules, rates and deadlines change from time to time. Always confirm the current position with a qualified Chartered Accountant before making decisions.',
    ],
  },
  {
    title: 'GST Compliance: A Checklist for Small Businesses',
    slug: 'gst-compliance-checklist-for-small-businesses',
    excerpt: 'Common recurring GST tasks that registered businesses should track, presented as a simple sample checklist.',
    category: 'GST',
    publishedAt: new Date('2026-02-05'),
    content: [
      DISCLAIMER,
      '## Recurring activities',
      'Registered businesses generally need to maintain proper invoices, reconcile purchase records with available input tax credit data, and file periodic returns within the due dates.',
      '## Keep records consistent',
      'Consistent invoice numbering, accurate HSN/SAC details and timely bookkeeping make return filing smoother and reduce the chances of mismatches.',
      '## Verify current requirements',
      'Due dates, thresholds and procedures are updated by the authorities periodically. Please verify the latest requirements with your CA.',
    ],
  },
  {
    title: 'Financial Planning: Building a Clear Roadmap',
    slug: 'financial-planning-building-a-clear-roadmap',
    excerpt: 'How defining goals, tracking cash flow and reviewing periodically can bring clarity to personal and business finances.',
    category: 'Financial Planning',
    publishedAt: new Date('2026-03-01'),
    content: [
      DISCLAIMER,
      '## Start with goals',
      'Whether it is expanding a business, funding education or planning retirement, clearly written goals make it easier to decide how much to save, invest or set aside.',
      '## Understand cash flow',
      'A realistic picture of income and expenses is the foundation of any financial plan. Reviewing it regularly helps you adjust before small issues become large ones.',
      '## Review regularly',
      'Life and business circumstances change. A periodic review with an advisor keeps your plan relevant.',
    ],
  },
].map((item) => ({ ...item, author: '[Author Name]', readTime: 4, isPublished: true, isPlaceholder: true }));

async function run() {
  await connectDB();
  if (process.argv.includes('--destroy')) {
    const { deletedCount } = await Insight.deleteMany({ isPlaceholder: true });
    console.log(`Removed ${deletedCount} placeholder insight(s).`);
  } else {
    for (const item of insights) {
      await Insight.updateOne({ slug: item.slug }, { $set: item }, { upsert: true });
    }
    console.log(`Seeded ${insights.length} placeholder insights (existing slugs were updated).`);
  }
  await mongoose.disconnect();
}

run().catch(async (err) => {
  console.error(err.message);
  await mongoose.disconnect();
  process.exit(1);
});
