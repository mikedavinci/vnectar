'use client';

import VideoBackground from '@/components/VideoBackground';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <>
      <VideoBackground overlayOpacity={90} className="pt-20">
        <div className="container-custom">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-primary-700 hover:text-primary-950 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </motion.div>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="heading-lg mb-6">
              Let's Transform Your Business
            </h1>
            <p className="body-lg text-primary-600 max-w-3xl mx-auto">
              Ready to join 500+ businesses scaling with AI? Fill out the form below and our team 
              will create a custom strategy for your business within 24 hours.
            </p>
          </motion.div>
        </div>

        {/* Contact Form - Remove default padding and background */}
        <div className="pb-16">
          <ContactSection isStandalonePage={true} />
        </div>
      </VideoBackground>
    </>
  );
}