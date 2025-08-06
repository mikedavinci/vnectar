'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-32 h-8 bg-primary-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Placeholder for Phase 2 */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container-custom">
          <div className="text-center animate-fade-in">
            <h1 className="heading-xl gradient-text mb-6">
              Transform Your Business with AI
            </h1>
            <p className="body-lg text-primary-600 max-w-3xl mx-auto mb-8">
              Join 500+ businesses already using Vision Nectar to automate their workflows, 
              capture more leads, and scale faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary animate-scale-in">
                Get Started Today
              </button>
              <button className="btn-secondary animate-scale-in" style={{ animationDelay: '0.1s' }}>
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder sections for upcoming phases */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Phase 2 Coming Soon</h2>
          <p className="body-md text-primary-600 max-w-2xl mx-auto">
            Content integration, pricing sections, testimonials, and advanced animations 
            will be implemented in the next phase.
          </p>
        </div>
      </section>
    </div>
  );
}