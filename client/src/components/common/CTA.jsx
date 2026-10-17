import Button from './Button.jsx';

export default function CTA({
  heading = "Let's Make Your Financial Decisions Clearer.",
  description = 'Tell us what you need help with and we will get back to you.',
  buttonLabel = 'Schedule a Consultation',
  to = '/contact',
}) {
  return (
    <section data-surface="dark" className="bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">{heading}</h2>
          {description && <p className="mt-4 text-base leading-relaxed text-white/80">{description}</p>}
        </div>
        <div className="shrink-0">
          <Button to={to} variant="light">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
