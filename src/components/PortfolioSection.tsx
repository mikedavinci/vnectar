'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, TrendingUp, Users, DollarSign, MessageCircle } from 'lucide-react';

export default function PortfolioSection() {
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

  const itemVariants = {
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

  const caseStudies = [
    {
      title: 'TechStart Solutions',
      category: 'SaaS Startup',
      description: 'Complete AI transformation for a B2B SaaS company, including chatbot implementation and lead generation system.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { icon: TrendingUp, label: 'Lead Increase', value: '3000%' },
        { icon: Users, label: 'Monthly Leads', value: '150+' },
        { icon: DollarSign, label: 'Revenue Growth', value: '$50K/mo' },
      ],
      tags: ['AI Chatbot', 'Landing Page', 'CRM Integration'],
      timeline: '6 weeks',
    },
    {
      title: 'Local Service Pro',
      category: 'Home Services',
      description: 'Multi-platform chatbot system with automated booking and customer service for a growing home services business.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { icon: MessageCircle, label: 'Response Time', value: '24/7' },
        { icon: TrendingUp, label: 'Conversion Rate', value: '400%' },
        { icon: Users, label: 'Customer Satisfaction', value: '98%' },
      ],
      tags: ['WhatsApp Bot', 'Booking System', 'Customer Service'],
      timeline: '4 weeks',
    },
    {
      title: 'E-commerce Empire',
      category: 'Online Retail',
      description: 'Full marketing automation suite with AI-powered customer engagement and personalized email campaigns.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { icon: DollarSign, label: 'Revenue Increase', value: '250%' },
        { icon: TrendingUp, label: 'Email Open Rate', value: '45%' },
        { icon: Users, label: 'Customer Retention', value: '85%' },
      ],
      tags: ['Email Automation', 'Social Media', 'Analytics'],
      timeline: '8 weeks',
    },
  ];

  return (
    <section ref={ref} id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="heading-lg mb-6">
            Success Stories
          </motion.h2>
          <motion.p variants={itemVariants} className="body-md text-primary-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth with our AI solutions. 
            Real results from real clients.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl shadow-strong"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium">{study.timeline}</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                      {study.category}
                    </span>
                    <h3 className="heading-md mb-4">{study.title}</h3>
                    <p className="body-md text-primary-600 mb-6">{study.description}</p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-primary-50 rounded-xl">
                        <result.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary-950 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-primary-600">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-950 text-white rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary group"
                  >
                    View Full Case Study
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="heading-sm mb-4">Ready to Be Our Next Success Story?</h3>
            <p className="body-md text-primary-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their growth with Vision Nectar. 
              Let's create your success story together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}