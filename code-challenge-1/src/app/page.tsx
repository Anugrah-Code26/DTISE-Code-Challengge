import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const HeroSection = dynamic(() => import('../components/heroSection'));
const CompanyOverview = dynamic(() => import('../components/companyOverview'));
const ServicesSection = dynamic(() => import('../components/servicesSection'));
const TestimonialsSection = dynamic(() => import('../components/testimonialsSection'));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <CompanyOverview />
        <ServicesSection />
        <TestimonialsSection />
      </Suspense>
    </div>
  );
}
