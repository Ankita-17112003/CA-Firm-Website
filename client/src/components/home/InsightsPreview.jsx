import Section from '../common/Section.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import Button from '../common/Button.jsx';
import InsightCard from '../common/InsightCard.jsx';
import LoadingState from '../common/LoadingState.jsx';
import useInsights from '../../hooks/useInsights.js';

export default function InsightsPreview() {
  const { insights, loading, error, reload } = useInsights();

  return (
    <Section>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          title="Insights"
          description="Short reads on taxation, GST compliance and financial planning. Articles shown are sample content."
        />
        <Button to="/insights" variant="secondary" className="self-start">
          View all insights
        </Button>
      </div>

      <div className="mt-12">
        {loading && <LoadingState label="Loading articles" />}

        {!loading && error && (
          <div role="alert" className="border border-navy/15 bg-mist p-6">
            <p className="font-medium text-navy">Articles could not be loaded</p>
            <p className="mt-1 text-sm text-charcoal/80">{error}</p>
            <Button variant="secondary" className="mt-4" onClick={reload}>
              Try again
            </Button>
          </div>
        )}

        {!loading && !error && insights.length === 0 && (
          <p className="border border-navy/10 bg-mist p-6 text-charcoal/80">
            No articles have been published yet. Run <code>npm run seed</code> in the server folder to add sample articles.
          </p>
        )}

        {!loading && !error && insights.length > 0 && (
          <ul className="grid gap-6 md:grid-cols-3">
            {insights.slice(0, 3).map((insight) => (
              <li key={insight.slug} className="relative">
                <InsightCard insight={insight} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
