import { UserRound } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import PageHeader from '../components/common/PageHeader.jsx';
import Section from '../components/common/Section.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Photo from '../components/common/Photo.jsx';
import CTA from '../components/common/CTA.jsx';
import { images } from '../config/images.js';
import { site } from '../config/site.js';

const values = [
  { title: 'Integrity', text: 'We give honest advice, even when it is not the easiest thing to hear.' },
  { title: 'Confidentiality', text: 'Client information is handled with discretion and used only for the work at hand.' },
  { title: 'Accuracy', text: 'Figures, filings and reports are checked before they leave the office.' },
  { title: 'Accountability', text: 'We take ownership of deadlines and of our work.' },
  { title: 'Clarity', text: 'We explain things in plain language so you can decide with confidence.' },
];

// This is a real sequence, so the steps are numbered.
const approach = [
  { title: 'Understand', text: 'We begin by listening: your business or household, your goals and what is worrying you.' },
  { title: 'Plan', text: 'We agree what needs to be done, who does what and by when.' },
  { title: 'Deliver', text: 'We carry out the work carefully, keep you informed and ask only for what we need.' },
  { title: 'Review', text: 'We check in after the work, answer questions and plan for what comes next.' },
];

// Replace with the firm's real partners and team. Do not publish qualifications or memberships that have not been confirmed.
const team = [
  { name: '[CA Name]', role: '[Designation]', detail: '[Qualifications and membership details]' },
  { name: '[Team Member Name]', role: '[Designation]', detail: '[Area of work]' },
  { name: '[Team Member Name]', role: '[Designation]', detail: '[Area of work]' },
];

export default function About() {
  return (
    <>
      <Seo title="About Us" description={`About ${site.name}: our approach, values and how we work with clients.`} />
      <PageHeader
        title="About Us"
        description="A professional practice built on careful work, clear communication and long-term client relationships."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">Who we are</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-charcoal/85">
              <p>
                {site.name} provides taxation, GST, audit, accounting and advisory services to individuals and
                businesses in India.
              </p>
              <p>
                We combine professional diligence with direct, responsive communication, so that clients understand
                their numbers and their obligations and can plan with confidence.
              </p>
            </div>
          </div>
          <Photo image={images.facade} className="aspect-[4/3] w-full" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="border-t border-navy pt-6">
            <h2 className="font-display text-3xl">Our vision</h2>
            <p className="mt-4 leading-relaxed text-charcoal/85">
              To be a trusted financial partner whose advice helps clients make clear, confident decisions.
            </p>
          </div>
          <div className="border-t border-navy pt-6">
            <h2 className="font-display text-3xl">Our mission</h2>
            <p className="mt-4 leading-relaxed text-charcoal/85">
              To deliver accurate, timely and ethical professional services, explained in plain language and tailored to
              each client.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Professional values" description="The standards we hold ourselves to in every engagement." />
        <dl className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="border-t border-navy/20 pt-5">
              <dt className="font-display text-xl text-navy">{v.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-charcoal/85">{v.text}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="mist">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              title="How we work with clients"
              description="We keep the process simple and the communication regular."
            />
            <Photo image={images.meeting} className="mt-10 aspect-[4/3] w-full" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <ol className="divide-y divide-navy/10 self-center border-y border-navy/10">
            {approach.map((step, i) => (
              <li key={step.title} className="flex gap-5 py-6">
                <span className="font-display text-2xl text-sage" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/85">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Our team" description="The people you will work with." />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <li key={i}>
              <div className="flex aspect-[4/3] items-center justify-center bg-sage-50" role="img" aria-label="Photo placeholder">
                <UserRound className="size-14 text-sage" strokeWidth={1} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-sage">{member.role}</p>
              <p className="mt-2 text-sm text-charcoal/80">{member.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTA description="Speak to us about your requirements and we will explain how we can help." />
    </>
  );
}
