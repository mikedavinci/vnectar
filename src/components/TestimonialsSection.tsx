'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart Solutions',
      company: 'SaaS Startup',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content:
        'Vision Nectar transformed our lead generation completely. We went from 5 leads per month to over 150 qualified leads in just 30 days. The AI chatbot handles customer inquiries 24/7, and the ROI has been incredible.',
      rating: 5,
      results: '30x increase in leads',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder',
      company: 'Local Service Business',
      image:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content:
        'The team at Vision Nectar delivered exactly what they promised. Our landing page conversion rate increased by 400%, and the automated email campaigns have been generating consistent revenue every month.',
      rating: 5,
      results: '400% conversion increase',
    },
    {
      name: 'Emily Watson',
      role: 'Marketing Director',
      company: 'E-commerce Brand',
      image:
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content:
        'Working with Vision Nectar was a game-changer. Their AI-powered approach to customer engagement helped us scale from $50K to $200K monthly revenue. The white-glove service made everything seamless.',
      rating: 5,
      results: '$150K revenue increase',
    },
  ];

  const stats = [
    { number: '+$100k+', label: 'Average Savings' },
    { number: '10x', label: 'Average ROI' },
    { number: '30 Days', label: 'Results Guarantee' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="heading-lg mb-6">
            Trusted by businesses
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="body-md text-primary-600 max-w-3xl mx-auto"
          >
            See how businesses like yours are transforming their growth with
            Vision Nectar's AI solutions.
          </motion.p>
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-950 mb-2">
                {stat.number}
              </div>
              <div className="text-primary-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-primary-50 rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-primary-100"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary-400" />
              </div>

              {/* Content */}
              <p className="text-primary-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Results Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                {testimonial.results}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-primary-950">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-600">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-primary-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
