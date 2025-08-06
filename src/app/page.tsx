'use client';

import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}