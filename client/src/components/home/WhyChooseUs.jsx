import Section from '../common/Section.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import Photo from '../common/Photo.jsx';
import { images } from '../../config/images.js';

const points = [
  { title: 'Transparency', text: 'Clear explanations of what we do and why, so there are no surprises.' },
  { title: 'Accuracy', text: 'Careful checking of figures and filings before they are submitted.' },
  { title: 'Confidentiality', text: 'Your financial information is handled with discretion and shared only as needed to do the work.' },
  { title: 'Timely compliance', text: 'Due dates are tracked so that filings are prepared in advance, not at the last minute.' },
  { title: 'Practical financial guidance', text: 'Advice that fits your situation and can be put into action.' },
];

export default function WhyChooseUs() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            title="Professional Expertise. Personal Attention."
            description="You deal directly with the people doing your work, and you get answers in plain language."
          />
          <Photo image={images.office} className="mt-10 aspect-[4/3] w-full" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <dl className="divide-y divide-navy/10 self-center border-y border-navy/10">
          {points.map((p) => (
            <div key={p.title} className="py-6">
              <dt className="font-display text-xl text-navy">{p.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-charcoal/80">{p.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
