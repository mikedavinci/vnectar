'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Users,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactSectionProps {
  isStandalonePage?: boolean;
}

export default function ContactSection({
  isStandalonePage = false,
}: ContactSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        console.error('Form submission failed:', result.message);
        // You could add error state handling here
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@visionnectar.com',
      description: 'Get a response within 48 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (956) 320-1284',
      description: 'Text or call',
    },
    // {
    //   icon: MapPin,
    //   title: 'Visit Us',
    //   content: 'San Francisco, CA',
    //   description: 'Schedule an in-person meeting',
    // },
  ];

  const services = [
    'AI Chatbot Development',
    'Landing Page Design',
    'Social Media Campaigns',
    'Email Marketing Automation',
    'CRM Integration',
    'Full Marketing Suite',
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    "Let's discuss",
  ];

  if (isSubmitted) {
    return (
      <section ref={ref} id="contact" className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="heading-md mb-4">Thank You!</h2>
            <p className="body-md text-primary-600 mb-8">
              We've received your message and will get back to you within 2
              hours. Our team is excited to help transform your business with
              AI.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      id="contact"
      className={isStandalonePage ? 'py-8' : 'section-padding bg-primary-50'}
    >
      <div className="container-custom">
        {!isStandalonePage && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isMounted && inView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="heading-lg mb-6">
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="body-md text-primary-600 max-w-3xl mx-auto"
            >
              Let's discuss how Vision Nectar can transform your business. Get a
              custom quote and strategy session within 24 hours.
            </motion.p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isMounted && inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="heading-sm mb-8 text-black drop-shadow-lg">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-950 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary-800 font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-primary-600">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <h4 className="font-semibold text-primary-950 mb-6">
                Why Choose Vision Nectar?
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-primary-700">14 - 21 days setup</span>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-primary-700">
                    500+ successful projects
                  </span>
                </div> */}
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-primary-700">
                    10 new leads in 30 days{' '}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isMounted && inView ? 'visible' : 'hidden'}
            className={`bg-white rounded-2xl p-8 shadow-soft ${
              isStandalonePage
                ? 'shadow-strong backdrop-blur-sm bg-white/95'
                : ''
            }`}
          >
            <h3 className="heading-sm mb-8">Start Your Project</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="Your Company"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.company.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="+1 (956) 320-1284"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    {...register('service')}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:shadow-lg"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.service.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:shadow-lg"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-white shadow-sm hover:shadow-md focus:shadow-lg"
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl hover:shadow-2xl flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                    Sending...
                  </>
                ) : (
                  <>
                    Get Custom Quote
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </motion.button>

              <div>
                <p className="text-xs text-primary-500 text-center font-medium bg-primary-25 px-4 py-2 rounded-lg">
                  By submitting this form, you agree to our privacy policy.
                  We'll respond within 2 hours during business hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
