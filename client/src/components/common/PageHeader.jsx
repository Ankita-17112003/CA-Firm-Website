export default function PageHeader({ title, description }) {
  return (
    <section className="border-b border-navy/10 bg-mist">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10">
        <h1 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/80">{description}</p>}
      </div>
    </section>
  );
}
