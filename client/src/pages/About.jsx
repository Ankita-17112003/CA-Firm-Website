import { useState } from 'react';
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
// DEMO photos (Unsplash business portraits). Replace each `image` with the real person's photo, for example '/images/team/ca-name.jpg'.
const portrait = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&crop=faces&w=800&h=1000&q=80`;

const team = [
  { name: '[CA Name]', role: '[Designation]', detail: '[Qualifications and membership details]', image: portrait('photo-1560250097-0b93528c311a') },
  { name: '[Team Member Name]', role: '[Designation]', detail: '[Area of work]', image: portrait('photo-1573496359142-b8d87734a5a2') },
  { name: '[Team Member Name]', role: '[Designation]', detail: '[Area of work]', image: portrait('photo-1519085360753-af0119f7cbe7') },
];

// Shows the photo; if it is missing or fails to load, shows the icon placeholder instead.
function TeamPhoto({ src, name }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex aspect-[4/5] items-center justify-center bg-sage-50" role="img" aria-label={`Photo of ${name} (placeholder)`}>
        <UserRound className="size-10 text-sage sm:size-14" strokeWidth={1} aria-hidden="true" />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={`Portrait of ${name}`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-[4/5] w-full object-cover object-top"
    />
  );
}

export default function About() {
  return (
    <>
      <Seo title="About Us" description={`About ${site.name}: our approach, values and how we work with clients.`} />
      <PageHeader
        title="About Us"
        description="A professional practice built on careful work, clear communication and long-term client relationships."
        image={images.office.src}
      />

{/* Who we are */}
<Section>
  <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-20">
    <div className="min-w-0">
      <span aria-hidden="true" className="block h-0.5 w-10 bg-gold" />
      <h2 className="mt-4 font-display text-[1.7rem] leading-tight sm:text-3xl lg:text-4xl">Who we are</h2>
      <p className="mt-4 hyphens-auto text-justify text-lg leading-snug text-navy sm:mt-5 sm:text-xl">
        {site.name} provides taxation, GST, audit, accounting and advisory services to individuals and businesses in
        India.
      </p>
      <p className="mt-4 hyphens-auto text-justify text-[15px] leading-relaxed text-charcoal/80 sm:text-base">
        We combine professional diligence with direct, responsive communication, so that clients understand their
        numbers and their obligations and can plan with confidence.
      </p>
    </div>
    <Photo
      image={images.facade}
      className="-mx-6 aspect-[16/10] w-[calc(100%+3rem)] max-w-none sm:mx-0 sm:aspect-[4/3] sm:w-full"
      sizes="(min-width: 1024px) 50vw, 100vw"
    />
  </div>
</Section>

      {/* Vision and mission */}
      <Section tone="mist">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div className="border-t border-navy pt-5 sm:pt-6">
            <h2 className="font-display text-2xl sm:text-3xl">Our vision</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-charcoal/85 sm:mt-4 sm:text-base">
              To be a trusted financial partner whose advice helps clients make clear, confident decisions.
            </p>
          </div>
          <div className="border-t border-navy pt-5 sm:pt-6">
            <h2 className="font-display text-2xl sm:text-3xl">Our mission</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-charcoal/85 sm:mt-4 sm:text-base">
              To deliver accurate, timely and ethical professional services, explained in plain language and tailored to
              each client.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading title="Professional values" description="The standards we hold ourselves to in every engagement." />
        <dl className="mt-8 grid gap-x-12 gap-y-6 sm:mt-12 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="border-t border-navy/20 pt-4 sm:pt-5">
              <dt className="font-display text-lg text-navy sm:text-xl">{v.title}</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-charcoal/85 sm:mt-2 sm:text-sm">{v.text}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Client approach */}
      <Section tone="mist">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <SectionHeading
              title="How we work with clients"
              description="We keep the process simple and the communication regular."
            />
            <Photo
              image={images.meeting}
              className="mt-6 aspect-[16/10] w-full sm:mt-10 sm:aspect-[4/3]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <ol className="min-w-0 divide-y divide-navy/10 self-center border-y border-navy/10">
            {approach.map((step, i) => (
              <li key={step.title} className="flex gap-4 py-5 sm:gap-5 sm:py-6">
                <span className="w-6 shrink-0 font-display text-xl text-sage sm:text-2xl" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg sm:text-xl">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-charcoal/85 sm:mt-2 sm:text-sm">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Team: photo beside the text on phones (compact), stacked cards from sm up */}
      <Section>
        <SectionHeading title="Our team" description="The people you will work with." />
        <ul className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {team.map((member, i) => (
            <li key={i} className="flex items-start gap-4 sm:block">
              <div className="w-28 shrink-0 min-[400px]:w-32 sm:w-full">
                <TeamPhoto src={member.image} name={member.name} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg leading-snug sm:mt-5 sm:text-xl">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-sage">{member.role}</p>
                <p className="mt-2 break-words text-[15px] leading-relaxed text-charcoal/80 sm:text-sm">{member.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <CTA description="Speak to us about your requirements and we will explain how we can help." />
    </>
  );
}