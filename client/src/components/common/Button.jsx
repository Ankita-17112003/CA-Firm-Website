import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-navy text-white hover:bg-navy/90',
  secondary: 'border border-navy text-navy hover:bg-navy hover:text-white',
  light: 'bg-white text-navy hover:bg-white/90',
  outlineLight: 'border border-white/60 text-white hover:bg-white hover:text-navy',
};

// Renders a router <Link> when `to` is given, an <a> when `href` is given, otherwise a <button>.
export default function Button({
  to,
  href,
  variant = 'primary',
  loading = false,
  className = '',
  children,
  type = 'button',
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} disabled={loading || rest.disabled} aria-busy={loading || undefined} {...rest}>
      {loading && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}
