import { Link, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import Section from '../components/common/Section.jsx';
import Button from '../components/common/Button.jsx';
import CTA from '../components/common/CTA.jsx';
import LoadingState from '../components/common/LoadingState.jsx';
import useInsight from '../hooks/useInsight.js';
import { formatDate } from '../utils/formatDate.js';

const backLink = (
  <Link
    to="/insights"
    className="-ml-1 inline-flex min-h-11 items-center gap-1 rounded-sm pr-3 text-sm text-charcoal/80 underline-offset-4 hover:text-navy hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
  >
    <ChevronLeft className="size-4 shrink-0" aria-hidden="true" />
    All insights
  </Link>
);

export default function InsightDetails() {
  const { slug } = useParams();
  const { insight, loading, error, notFound, reload } = useInsight(slug);

  if (loading) return <LoadingState label="Loading article" />;

  if (notFound) {
    return (
      <>
        <Seo title="Article not found" noIndex />
        <Section>
          <div className="mx-auto max-w-xl text-center">
            <h1 className="font-display text-3xl leading-tight sm:text-4xl">Article not found</h1>
            <p className="mt-4 text-[17px] leading-relaxed text-charcoal/80 sm:text-base">
              This article may have been moved or unpublished.
            </p>
            <Button to="/insights" className="mt-8 w-full justify-center sm:w-auto">
              Browse all insights
            </Button>
          </div>
        </Section>
      </>
    );
  }

  if (error) {
    return (
      <Section>
        <div role="alert" className="mx-auto max-w-xl border border-navy/15 bg-mist p-5 sm:p-6">
          <p className="font-medium text-navy">This article could not be loaded</p>
          <p className="mt-1 break-words text-[15px] leading-relaxed text-charcoal/80 sm:text-sm">{error}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button variant="secondary" className="w-full justify-center sm:w-auto" onClick={reload}>
              Try again
            </Button>
            <Button to="/insights" variant="secondary" className="w-full justify-center sm:w-auto">
              Back to insights
            </Button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Seo title={insight.title} description={insight.excerpt} />
      <Section>
        <article className="mx-auto min-w-0 max-w-3xl">
          {backLink}

          <header className="mt-4 border-b border-navy/10 pb-6 sm:mt-6 sm:pb-8">
            <p className="text-sm font-medium text-sage">{insight.category}</p>
            <h1 className="mt-2 break-words font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {insight.title}
            </h1>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-charcoal/70 sm:mt-5">
              <span>By {insight.author}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt)}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{insight.readTime} min read</span>
            </p>
          </header>

          {insight.isPlaceholder && (
            <p className="mt-6 border-l-2 border-gold bg-mist px-4 py-3 text-[15px] leading-relaxed text-charcoal/85 sm:text-sm">
              Sample article. This is placeholder content and not legal, tax or financial advice.
            </p>
          )}

          <div className="mt-8 space-y-5 break-words text-[17px] leading-[1.75] text-charcoal/90 [overflow-wrap:anywhere] sm:mt-10 sm:text-lg sm:leading-relaxed">
            {insight.content.map((block, i) =>
              block.startsWith('## ') ? (
                <h2 key={i} className="!mt-8 font-display text-xl leading-snug sm:!mt-10 sm:text-2xl">
                  {block.slice(3)}
                </h2>
              ) : (
                <p key={i}>{block}</p>
              )
            )}
          </div>

          <p className="mt-10 border-t border-navy/10 pt-6 text-sm leading-relaxed text-charcoal/70 sm:mt-12">
            This article is for general information only. Tax laws, rates and deadlines change, so please consult a
            qualified professional before acting on it.
          </p>
        </article>
      </Section>
      <CTA description="Have a question about your own situation? Speak to us." />
    </>
  );
}