import Seo from '../components/common/Seo.jsx';
import PageHeader from '../components/common/PageHeader.jsx';
import Section from '../components/common/Section.jsx';
import Button from '../components/common/Button.jsx';
import CTA from '../components/common/CTA.jsx';
import { industries } from '../data/industries.js';

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries"
        description="Accounting, taxation and compliance support for startups, SMEs, corporate businesses, professionals and individuals."
      />
      <PageHeader
        title="Industries We Serve"
        description="Financial, accounting, taxation and compliance needs differ from one client to the next. This is how we support each group."
      />

      {industries.map((item, i) => {
        const Icon = item.icon;
        return (
          <Section key={item.slug} id={item.slug} tone={i % 2 ? 'mist' : 'white'}>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Icon className="size-9 text-navy" strokeWidth={1.25} aria-hidden="true" />
                <h2 className="mt-5 font-display text-3xl leading-tight">{item.title}</h2>
                <p className="mt-4 leading-relaxed text-charcoal/80">{item.intro}</p>
                <Button to="/contact" className="mt-7">
                  Talk to us
                </Button>
              </div>
              <dl className="divide-y divide-navy/10 border-y border-navy/10 lg:col-span-7">
                {item.support.map((row) => (
                  <div key={row.area} className="grid gap-1 py-5 sm:grid-cols-4 sm:gap-6">
                    <dt className="font-sans text-sm font-semibold text-navy">{row.area}</dt>
                    <dd className="text-sm leading-relaxed text-charcoal/85 sm:col-span-3">{row.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Section>
        );
      })}

      <CTA description="Tell us about your business or household and we will explain how we can help." />
    </>
  );
}
