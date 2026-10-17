import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="group relative flex h-full flex-col border border-navy/10 bg-white p-7 transition-colors duration-200 hover:border-navy/30">
      <Icon className="size-8 text-navy" strokeWidth={1.25} aria-hidden="true" />
      <h3 className="mt-6 font-display text-xl leading-snug">
        <Link to={`/services#${service.slug}`} className="after:absolute after:inset-0">
          {service.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/80">{service.summary}</p>
      <span className="mt-5 text-sm font-medium text-navy underline-offset-4 group-hover:underline">View details</span>
    </article>
  );
}
