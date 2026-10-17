import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import Seo from '../components/common/Seo.jsx';
import Section from '../components/common/Section.jsx';
import ContactForm from '../components/common/ContactForm.jsx';
import { site, hasRealEmail, hasRealPhone, whatsappLink } from '../config/site.js';

/*
 * Hero background photo.
 * Put the file at  public/images/contact-hero.jpg  (Vite serves /public from the site root).
 * Recommended: 1920 x 640 px, JPG or WebP, under ~250 KB, no text or watermark.
 * If the file is missing, the hero simply shows a plain navy background.
 */
const CONTACT_HERO_SRC = '/image/contactHero.jpg';

// Small uppercase label above a section heading
// Small label above a section heading (sentence case, no tracking)
const eyebrowClass = 'text-sm font-medium text-sage';
// Section heading: regular weight, sentence case
const headingClass =
  'mt-1.5 break-words font-display text-2xl font-normal leading-snug text-navy sm:text-3xl lg:text-[2rem]';

// Tappable contact links: same size and look as the other details; padding grows the tap area without moving the layout
const linkClass =
  '-my-2 inline-block break-words rounded-sm py-2 text-charcoal/85 underline decoration-navy/30 underline-offset-4 [overflow-wrap:anywhere] hover:text-navy hover:decoration-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy';
// Map height: ~296px phones, ~368px small tablets, ~416px tablets, ~480px desktop
const mapHeightClass = 'h-[18.5rem] sm:h-[23rem] md:h-[26rem] lg:h-[30rem]';

function Detail({ icon: Icon, label, children }) {
  return (
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy sm:size-14">
        <Icon className="size-5 text-white sm:size-6" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-sans text-sm font-semibold text-navy">{label}</h3>
        <div className="break-words text-[15px] leading-relaxed text-charcoal/85 [overflow-wrap:anywhere] sm:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

function ContactHero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section data-surface="dark" className="relative isolate overflow-hidden bg-navy">
      {!imageFailed && (
        <>
          <img
            src={CONTACT_HERO_SRC}
            alt=""
            aria-hidden="true"
            width="1920"
            height="640"
            decoding="async"
            fetchPriority="high"
            onError={() => setImageFailed(true)}
            className="absolute inset-0 -z-20 size-full object-cover object-center"
          />
          {/* Slightly stronger overlay on phones so the title stays readable on a cropped photo */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/80 sm:bg-navy/75" />
        </>
      )}

      <div className="mx-auto max-w-7xl px-5 py-12 text-center sm:px-6 sm:py-16 lg:px-10 lg:py-24">
        <h1 className="font-display text-3xl leading-tight text-white min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
          Contact Us
        </h1>
        <nav aria-label="Breadcrumb" className="mt-2 sm:mt-4">
          <ol className="flex flex-wrap items-center justify-center gap-x-2 text-sm text-white/85">
            <li>
              <Link
                to="/"
                className="inline-flex min-h-11 items-center rounded-sm px-1 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="px-1 text-white">
              Contact Us
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default function Contact() {
  const whatsapp = whatsappLink();

  return (
    <>
      <Seo
        title="Contact"
        description="Book a consultation or send an inquiry about taxation, GST, audit, accounting, company registration and advisory services."
      />
      <ContactHero />

      <Section>
        <div className="grid lg:grid-cols-12 lg:gap-16">
          {/* Left: form (first on mobile) */}
          <div className="min-w-0 lg:col-span-7">
            <p className={eyebrowClass}>Send us email</p>
            <h2 className={headingClass}>Feel free to write</h2>
            <div className="mt-5 sm:mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Right: contact details (divider and spacing when stacked below the form) */}
          <aside
            className="mt-10 min-w-0 border-t border-navy/10 pt-10 sm:mt-14 sm:pt-12 lg:col-span-5 lg:mt-0 lg:border-t-0 lg:pt-0"
            aria-label="Contact details"
          >
            <p className={eyebrowClass}>Need any help?</p>
            <h2 className={headingClass}>Get in touch with us</h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-charcoal/80 sm:mt-4 sm:text-base">
              Tell us how we can help. Your inquiry is saved securely and the firm will get back to you.
            </p>

            <div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 lg:grid-cols-1">
              <Detail icon={MapPin} label="Office">
                <p>{site.address}</p>
              </Detail>
              <Detail icon={Phone} label="Phone">
                {hasRealPhone ? (
                  <a className={linkClass} href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>
                    {site.phone}
                  </a>
                ) : (
                  <p>{site.phone}</p>
                )}
              </Detail>
              <Detail icon={Mail} label="Email">
                {hasRealEmail ? (
                  <a className={linkClass} href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                ) : (
                  <p>{site.email}</p>
                )}
              </Detail>
              <Detail icon={MessageCircle} label="WhatsApp">
                {whatsapp ? (
                  <a className={linkClass} href={whatsapp} target="_blank" rel="noopener noreferrer">
                    Message us on WhatsApp
                  </a>
                ) : (
                  <p>[WhatsApp number to be added]</p>
                )}
              </Detail>
            </div>
          </aside>
        </div>
      </Section>

      {/* Full-bleed map: edge to edge, full color, sage backdrop while it loads */}
      
      <div className="w-full overflow-hidden border-t border-navy/10 bg-sage-50 px-4 py-6 sm:p-0">
        {site.mapsEmbedUrl ? (
          <iframe
            title="Office location on Google Maps"
            src={site.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={`block w-full border-0 ${mapHeightClass}`}
            allowFullScreen
          />
        ) : (
          <div
            role="img"
            aria-label="Map placeholder"
            className={`flex w-full flex-col items-center justify-center gap-3 px-6 text-center ${mapHeightClass}`}
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-navy">
              <MapPin className="size-6 text-white" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <p className="max-w-md text-[15px] leading-relaxed text-charcoal/70 sm:text-sm">
              [Google Maps embed placeholder. Add the office location once confirmed.]
            </p>
          </div>
        )}
      </div>
    </>
  );
}