import { useState } from 'react';

// Pass `image` (for example "/images/about-hero.jpg") to show a photo behind the title.
// Without `image`, or if the file fails to load, the plain light header is shown.
export default function PageHeader({ title, description, image }) {
  const [failed, setFailed] = useState(false);
  const hasImage = Boolean(image) && !failed;

  return (
    <section
      data-surface={hasImage ? 'dark' : undefined}
      className={`relative isolate overflow-hidden border-b border-navy/10 ${hasImage ? 'bg-navy' : 'bg-mist'}`}
    >
      {hasImage && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            decoding="async"
            fetchPriority="high"
            onError={() => setFailed(true)}
            className="absolute inset-0 -z-20 size-full object-cover object-center"
          />
          {/* Dark overlay keeps the white text readable on any photo */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/75" />
        </>
      )}

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
        <h1 className={`max-w-3xl font-display text-4xl leading-tight sm:text-5xl ${hasImage ? 'text-white' : ''}`}>
          {title}
        </h1>
        {description && (
          <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${hasImage ? 'text-white/85' : 'text-charcoal/80'}`}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}