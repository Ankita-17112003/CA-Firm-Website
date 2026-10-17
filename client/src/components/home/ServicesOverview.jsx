import Section from '../common/Section.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import Button from '../common/Button.jsx';
import ServiceCard from '../services/ServiceCard.jsx';
import { services } from '../../data/services.js';

export default function ServicesOverview() {
  return (
    <Section tone="mist" aria-labelledby="services-heading">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          title="Our Services"
          description="Taxation, compliance, audit and advisory support under one roof, for individuals and businesses."
        />
        <Button to="/services" variant="secondary" className="self-start">
          View all services
        </Button>
      </div>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li key={service.slug}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
