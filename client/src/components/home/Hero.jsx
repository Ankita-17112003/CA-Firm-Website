import Button from '../common/Button.jsx';
import Photo from '../common/Photo.jsx';
import { images } from '../../config/images.js';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        <div>
          <h1 className="font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Clarity in Finance. Confidence in Every Decision.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80">
            Delivering trusted financial, taxation, audit and business advisory services that help individuals and
            businesses move forward with confidence.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Book a Consultation</Button>
            <Button to="/services" variant="secondary">
              Explore Our Services
            </Button>
          </div>
        </div>
        <Photo image={images.hero} eager sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full lg:aspect-[4/5]" />
      </div>
    </section>
  );
}
