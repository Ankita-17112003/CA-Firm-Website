// Consistent vertical rhythm and container for every page section.
export default function Section({ id, tone = 'white', className = '', children, ...rest }) {
  const tones = { white: 'bg-white', mist: 'bg-mist' };
  return (
    <section id={id} className={`${tones[tone]} ${className}`} {...rest}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24">{children}</div>
    </section>
  );
}
