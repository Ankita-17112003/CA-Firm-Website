import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../common/Button.jsx';
import { navLinks, site } from '../../config/site.js';

const linkClass = ({ isActive }) =>
  `relative py-2 text-sm font-medium transition-colors duration-200 ${
    isActive
      ? 'text-navy after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-gold'
      : 'text-charcoal/80 hover:text-navy'
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="font-display text-xl text-navy">
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" className="ml-2">
            Book a Consultation
          </Button>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-navy/10 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `block border-b border-navy/5 py-4 text-base ${isActive ? 'font-medium text-navy' : 'text-charcoal/80'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-5">
              <Button to="/contact" className="w-full">
                Book a Consultation
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
