import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/common/Seo.jsx';
import PageHeader from '../components/common/PageHeader.jsx';
import Section from '../components/common/Section.jsx';
import Button from '../components/common/Button.jsx';
import CTA from '../components/common/CTA.jsx';
import { services } from '../data/services.js';

/*
 * Height (px) of your fixed/sticky site header. The quick-links bar sticks just
 * below it, and anchor jumps stop below both so headings are never hidden.
 * Adjust these two numbers to match your layout.
 */
const HEADER_HEIGHT = 64;
const NAV_HEIGHT = 56;
const SCROLL_OFFSET = HEADER_HEIGHT + NAV_HEIGHT + 16;

const listClass =
  'mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-charcoal/85 marker:text-sage sm:text-sm';
const subHeading = 'font-sans text-base font-semibold text-navy sm:text-sm';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET + NAV_HEIGHT;
  window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
}

export default function Services() {
  const { hash } = useLocation();
  const [activeSlug, setActiveSlug] = useState(null);
  const chipRefs = useRef({});
  const rowRef = useRef(null);

  // Jump to the section when the page is opened with /services#slug (or the hash changes).
  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    const t = setTimeout(() => scrollToId(id), 50);
    return () => clearTimeout(t);
  }, [hash]);

  // Highlight the quick link of the section currently on screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSlug(visible.target.id);
      },
      { rootMargin: `-${SCROLL_OFFSET}px 0px -55% 0px`, threshold: [0, 0.25, 0.5, 1] }
    );
    services.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Keep the active chip visible in the horizontally scrolling bar on mobile.
  useEffect(() => {
    const chip = chipRefs.current[activeSlug];
    const row = rowRef.current;
    if (!chip || !row) return;
    const left = chip.offsetLeft - (row.clientWidth - chip.offsetWidth) / 2;
    row.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }, [activeSlug]);

  return (
    <>
      <Seo
        title="Services"
        description="Taxation, GST, audit, accounting, company registration, corporate compliance, financial planning and business consulting services."
      />
      <PageHeader
        title="Services"
        description="Taxation, compliance, audit and advisory support for individuals and businesses. Choose a service to jump to its details."
      />

      {/* Quick links: swipeable single row on phones, wrapping list on large screens */}
      <nav
        aria-label="Services on this page"
        style={{ top: HEADER_HEIGHT }}
        className="sticky z-20 border-b border-navy/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      >
        <div className="relative mx-auto max-w-7xl">
          <ul
            ref={rowRef}
            className="relative flex snap-x scroll-px-6 gap-2 overflow-x-auto px-6 py-3 [scrollbar-width:none] lg:flex-wrap lg:gap-x-3 lg:gap-y-2 lg:overflow-visible lg:px-10 [&::-webkit-scrollbar]:hidden"
            style={{ minHeight: NAV_HEIGHT }}
          >
            {services.map((s) => {
              const isActive = activeSlug === s.slug;
              return (
                <li key={s.slug} className="shrink-0 snap-start">
                  <Link
                    ref={(el) => (chipRefs.current[s.slug] = el)}
                    to={`/services#${s.slug}`}
                    onClick={() => scrollToId(s.slug)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`inline-flex min-h-10 items-center whitespace-nowrap rounded-full border px-4 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${
                      isActive
                        ? 'border-navy bg-navy text-white'
                        : 'border-navy/15 text-charcoal/80 hover:border-navy/40 hover:text-navy'
                    }`}
                  >
                    {s.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Fade hints that the row scrolls sideways (phones/tablets only) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent lg:hidden"
          />
        </div>
      </nav>

      {services.map((s, i) => {
        const Icon = s.icon;
        return (
          <Section key={s.slug} id={s.slug} tone={i % 2 ? 'mist' : 'white'}>
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
              {/* Summary column */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4 lg:block">
                  <Icon
                    className="size-8 shrink-0 text-navy sm:size-9"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <h2 className="font-display text-2xl leading-tight sm:text-3xl lg:mt-5">
                    {s.title}
                  </h2>
                </div>
                <p className="mt-4 max-w-prose leading-relaxed text-charcoal/80">{s.overview}</p>
                <Button
                  to={`/contact?service=${encodeURIComponent(s.title)}`}
                  className="mt-6 w-full justify-center sm:mt-7 sm:w-auto"
                >
                  Discuss this service
                </Button>
              </div>

              {/* Details column */}
              <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:col-span-8">
                <div>
                  <h3 className={subHeading}>What it includes</h3>
                  <ul className={listClass}>
                    {s.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className={subHeading}>Who may benefit</h3>
                  <ul className={listClass}>
                    {s.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h3 className={subHeading}>How we can assist</h3>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/85 sm:text-sm">
                    {s.assist}
                  </p>
                </div>
              </div>
            </div>

            {/* Easy way back on long mobile pages */}
            <div className="mt-8 lg:hidden">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="min-h-10 text-sm text-charcoal/70 underline underline-offset-4 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                Back to all services
              </button>
            </div>
          </Section>
        );
      })}

      <CTA description="Not sure which service you need? Describe your situation and we will point you in the right direction." />
    </>
  );
}