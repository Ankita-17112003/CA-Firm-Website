import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import PageHeader from '../components/common/PageHeader.jsx';
import Section from '../components/common/Section.jsx';
import Button from '../components/common/Button.jsx';
import InsightCard from '../components/common/InsightCard.jsx';
import LoadingState from '../components/common/LoadingState.jsx';
import useInsights from '../hooks/useInsights.js';
import { inputClass } from '../components/common/FormField.jsx';
import { images } from '../config/images.js';

export default function Insights() {
  const { insights, loading, error, reload } = useInsights();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(insights.map((i) => i.category))], [insights]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return insights.filter((i) => {
      const inCategory = category === 'All' || i.category === category;
      const matches = !q || [i.title, i.excerpt, i.category].some((t) => t.toLowerCase().includes(q));
      return inCategory && matches;
    });
  }, [insights, query, category]);

  const clearFilters = () => {
    setQuery('');
    setCategory('All');
  };

  return (
    <>
      <Seo title="Insights" description="Articles on taxation, GST compliance and financial planning." />
     <PageHeader
  title="Insights"
  description="Short reads on taxation, GST compliance and financial planning. Articles marked Sample are placeholder content and not professional advice."
  image={images.facade.src}
/>

      <Section>
        {loading && <LoadingState label="Loading articles" />}

        {!loading && error && (
          <div role="alert" className="border border-navy/15 bg-mist p-5 sm:p-6">
            <p className="font-medium text-navy">Articles could not be loaded</p>
            <p className="mt-1 break-words text-[15px] text-charcoal/80 sm:text-sm">{error}</p>
            <Button variant="secondary" className="mt-4 w-full justify-center sm:w-auto" onClick={reload}>
              Try again
            </Button>
          </div>
        )}

        {!loading && !error && insights.length === 0 && (
          <p className="border border-navy/10 bg-mist p-5 text-[15px] leading-relaxed text-charcoal/80 sm:p-6 sm:text-base">
            No articles have been published yet. Run{' '}
            <code className="break-words rounded-sm bg-white px-1.5 py-0.5 text-sm">npm run seed</code> in the
            server folder to add sample articles.
          </p>
        )}

        {!loading && !error && insights.length > 0 && (
          <>
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              {/* Search comes first on phones (easiest to reach), second on desktop */}
              <div className="relative order-1 w-full lg:order-2 lg:max-w-sm">
                <label htmlFor="insight-search" className="sr-only">
                  Search articles
                </label>
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-charcoal/50"
                  aria-hidden="true"
                />
                <input
                  id="insight-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles"
                  className={`${inputClass} min-h-11 pl-11 !text-base sm:!text-sm`}
                />
              </div>

              {/* Categories: swipeable single row on phones, wrapping row from sm up */}
              <div className="relative order-2 -mx-6 lg:order-1 lg:mx-0">
                <div
                  role="group"
                  aria-label="Filter by category"
                  className="flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
                >
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      aria-pressed={category === c}
                      onClick={() => setCategory(c)}
                      className={`min-h-10 shrink-0 whitespace-nowrap rounded-sm border px-4 text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${
                        category === c
                          ? 'border-navy bg-navy text-white'
                          : 'border-navy/25 text-charcoal hover:border-navy'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                {/* Fade hints that the row scrolls sideways (phones only) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden"
                />
              </div>
            </div>

            <p className="mt-5 text-sm text-charcoal/70 sm:mt-6" role="status" aria-live="polite">
              Showing {filtered.length} of {insights.length} {insights.length === 1 ? 'article' : 'articles'}
            </p>

            {filtered.length > 0 ? (
              <ul className="mt-5 grid grid-cols-1 gap-5 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {filtered.map((insight) => (
                  <li key={insight.slug} className="relative min-w-0">
                    <InsightCard insight={insight} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-5 border border-navy/10 bg-mist p-6 text-center sm:mt-6 sm:p-8">
                <p className="font-medium text-navy">No articles match your search</p>
                <p className="mt-1 text-[15px] text-charcoal/80 sm:text-sm">Try a different keyword or category.</p>
                <Button variant="secondary" className="mt-5 w-full justify-center sm:w-auto" onClick={clearFilters}>
                  Clear search and filters
                </Button>
              </div>
            )}
          </>
        )}
      </Section>
    </>
  );
}