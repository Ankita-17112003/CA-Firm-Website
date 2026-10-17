import { Link } from 'react-router-dom';
import { navLinks, site, hasRealEmail, hasRealPhone } from '../../config/site.js';
import { services } from '../../data/services.js';

const linkClass = 'text-sm text-white/75 transition-colors duration-200 hover:text-white';

export default function Footer() {
  return (
    <footer data-surface="dark" className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-xl">{site.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">{site.description}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-semibold text-white">Quick links</h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="font-sans text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services#${s.slug}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-white/75">
            <p>{site.address}</p>
            <p>
              {hasRealPhone ? (
                <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white">
                  {site.phone}
                </a>
              ) : (
                site.phone
              )}
            </p>
            <p>
              {hasRealEmail ? (
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              ) : (
                site.email
              )}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs leading-relaxed text-white/60 lg:px-10">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="mt-2 max-w-3xl">
            The information on this website is for general guidance only and is not legal, tax or financial advice. Please
            consult a qualified professional before acting on it.
          </p>
        </div>
      </div>
    </footer>
  );
}
