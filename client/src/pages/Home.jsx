import Seo from '../components/common/Seo.jsx';
import CTA from '../components/common/CTA.jsx';
import Hero from '../components/home/Hero.jsx';
import Principles from '../components/home/Principles.jsx';
import ServicesOverview from '../components/home/ServicesOverview.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import IndustriesPreview from '../components/home/IndustriesPreview.jsx';
import InsightsPreview from '../components/home/InsightsPreview.jsx';

export default function Home() {
  return (
    <>
      <Seo
        title="Taxation, GST, Audit and Business Advisory"
        description="Trusted financial, taxation, audit and business advisory services that help individuals and businesses in India move forward with confidence."
      />
      <Hero />
      <Principles />
      <ServicesOverview />
      <WhyChooseUs />
      <IndustriesPreview />
      <InsightsPreview />
      <CTA />
    </>
  );
}
