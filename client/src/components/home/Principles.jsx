const principles = [
  { title: 'Professional Integrity', text: 'We act honestly and treat every client matter with discretion.' },
  { title: 'Regulatory Compliance', text: 'We help you meet filing and statutory requirements accurately and on time.' },
  { title: 'Strategic Financial Guidance', text: "Advice that connects today's numbers to your longer-term goals." },
  { title: 'Client-Focused Solutions', text: 'We start from your situation rather than a standard package.' },
];

export default function Principles() {
  return (
    <section aria-labelledby="principles-heading" className="border-y border-navy/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <h2 id="principles-heading" className="sr-only">
          Our principles
        </h2>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <li key={p.title} className="border-t border-navy pt-5">
              <h3 className="font-display text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
