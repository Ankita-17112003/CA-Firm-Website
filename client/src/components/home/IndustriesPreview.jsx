import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Section from '../common/Section.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import Button from '../common/Button.jsx';
import { industries } from '../../data/industries.js';

export default function IndustriesPreview() {
  return (
    <Section tone="mist">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            title="Industries We Serve"
            description="Our support is shaped around how different clients earn, spend and report."
          />
          <Button to="/industries" variant="secondary" className="mt-8">
            View all industries
          </Button>
        </div>
        <ul className="divide-y divide-navy/10 border-y border-navy/10 lg:col-span-8">
          {industries.map(({ slug, title, summary, icon: Icon }) => (
            <li key={slug}>
              <Link to={`/industries#${slug}`} className="group flex items-center gap-5 py-6">
                <Icon className="size-7 shrink-0 text-navy" strokeWidth={1.25} aria-hidden="true" />
                <span className="flex-1">
                  <span className="block font-display text-xl text-navy group-hover:underline">{title}</span>
                  <span className="mt-1 block text-sm text-charcoal/80">{summary}</span>
                </span>
                <ChevronRight className="size-5 shrink-0 text-charcoal/50" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
