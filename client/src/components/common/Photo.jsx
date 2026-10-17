import { useState } from 'react';

// Image with lazy loading and a plain tonal fallback if the source fails.
// Use eager={true} only for above-the-fold images (e.g. the hero).
export default function Photo({ image, className = '', eager = false, sizes }) {
  const [failed, setFailed] = useState(false);

  if (failed || !image?.src) {
    return <div role="img" aria-label={image?.alt} className={`bg-sage-50 ${className}`} />;
  }
  return (
    <img
      src={image.src}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      sizes={sizes}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
