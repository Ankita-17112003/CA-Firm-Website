export default function SectionHeading({ title, description, align = 'left', as: Tag = 'h2', tone = 'light', className = '' }) {
  const centered = align === 'center';
  const titleColor = tone === 'dark' ? 'text-white' : 'text-navy';
  const textColor = tone === 'dark' ? 'text-white/80' : 'text-charcoal/80';

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      <Tag className={`font-display text-3xl leading-tight sm:text-4xl ${titleColor}`}>{title}</Tag>
      {description && <p className={`mt-4 text-base leading-relaxed ${textColor}`}>{description}</p>}
    </div>
  );
}
