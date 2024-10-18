import HeroSection from '../components/heroSection';
import CompanyOverview from '../components/companyOverview';
import ServicesSection from '../components/servicesSection';
import TestimonialsSection from '../components/testimonialsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyOverview />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
