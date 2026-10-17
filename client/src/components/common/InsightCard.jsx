import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate.js';

export default function InsightCard({ insight }) {
  return (
    <article className="group flex h-full flex-col border border-navy/10 bg-white p-7 transition-colors duration-200 hover:border-navy/30">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-charcoal/70">
        <span className="font-medium text-sage">{insight.category}</span>
        <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt)}</time>
      </div>
      <h3 className="mt-4 font-display text-xl leading-snug">
        <Link to={`/insights/${insight.slug}`} className="after:absolute after:inset-0 hover:underline">
          {insight.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/80">{insight.excerpt}</p>
      <p className="mt-5 text-sm text-charcoal/70">
        {insight.author} &middot; {insight.readTime} min read
        {insight.isPlaceholder && <span className="ml-2 border border-gold px-1.5 py-0.5 text-xs text-navy">Sample</span>}
      </p>
    </article>
  );
}
