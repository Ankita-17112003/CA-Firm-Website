import Seo from '../components/common/Seo.jsx';
import Button from '../components/common/Button.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" noIndex />
      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32 lg:px-10">
        <h1 className="font-display text-4xl sm:text-5xl">This page could not be found</h1>
        <p className="mt-5 text-lg text-charcoal/80">
          The link may be broken, or the page may have moved. Try the home page or get in touch with us.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/">Go to Home</Button>
          <Button to="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
