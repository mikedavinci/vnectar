'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
  MessageCircle,
} from 'lucide-react';

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

  const caseStudies = [
    {
      title: 'PilotWizard',
      category: 'AI Chatbots and CRM',
      description:
        'We built the PilotWizard platform. We built the platform to have all of your customer interaction history and insights on hand to build winning sales pipelines and shorten sales cycles. Use PilotWizard for automation to keep time-wasting tasks on autopilot and get the time you need to focus on high-value work.',
      image:
        'https://res.cloudinary.com/dtgmhmxlx/image/upload/v1757955058/vnectar/Screenshot_2025-09-15_at_11.50.52_AM_wwahel.png',
      url: 'https://pilotwizard.ai',
      results: [
        { icon: TrendingUp, label: 'Lead Increase', value: '3000%' },
        { icon: Users, label: 'Monthly Leads', value: '150+' },
        { icon: DollarSign, label: 'Revenue Growth', value: '$50K/mo' },
      ],
      tags: ['AI Chatbot', 'Landing Page', 'CRM Integration'],
      timeline: '6 weeks',
    },
    {
      title: 'My956',
      category: 'Localalized Marketing',
      description:
        'AI-powered recommendations, live chat support, and the best events happening right now in the Live Music Capital of the World. My956.com is a local music venue in the Rio Grande Valley. We built a website for them that included an AI-powered chatbot, live chat support, and the best events happening right now.',
      image:
        'https://res.cloudinary.com/dtgmhmxlx/image/upload/v1757955231/vnectar/Screenshot_2025-09-15_at_11.53.48_AM_j2cpkd.png',
      url: 'https://my956.com',
      results: [
        { icon: MessageCircle, label: 'Response Time', value: '24/7' },
        { icon: TrendingUp, label: 'Conversion Rate', value: '400%' },
        { icon: Users, label: 'Customer Satisfaction', value: '98%' },
      ],
      tags: ['WhatsApp Bot', 'Booking System', 'Customer Service'],
      timeline: '4 weeks',
    },
    {
      title: 'Elicells Stem Cell Clinic',
      category: 'Medical Clinic',
      description:
        'At EliCells, we understand that every patient is different, and we take the time to listen, understand, and guide you through every step of your regenerative medicine journey. Our holistic approach to health and wellness encompasses not only your physical well-being but also your emotional and mental health, ensuring that you receive comprehensive support and care throughout your treatment and beyond.  Our state-of-the-art clinic offers a range of cutting-edge treatments, including stem cell therapy, regenerative medicine, anti-aging solutions, orthopedic treatments, and aesthetic enhancements.',
      image:
        'https://res.cloudinary.com/dtgmhmxlx/image/upload/v1757955436/vnectar/Screenshot_2025-09-15_at_11.57.11_AM_mkaoqr.png',
      url: 'https://elicells.com',
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
    <section
      ref={ref}
      id="portfolio"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-10 left-10 w-80 h-80 bg-primary-100 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-primary-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-150 rounded-full opacity-15"
        />
      </div>

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16 relative z-10"
        >
          <motion.h2 variants={itemVariants} className="heading-lg mb-6">
            Success Stories
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="body-md text-primary-600 max-w-3xl mx-auto"
          >
            See how we've helped businesses like yours achieve remarkable growth
            with our AI solutions. Real results from real clients.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16 relative z-10"
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
                <a 
                  href={study.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-2xl shadow-strong cursor-pointer"
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-sm font-medium">
                          {study.timeline}
                        </span>
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                </a>
              </div>

              {/* Content */}
              <div
                className={`${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                      {study.category}
                    </span>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="heading-md">{study.title}</h3>
                      <a
                        href={study.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        Visit Site
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="body-md text-primary-600 mb-6">
                      {study.description}
                    </p>
                  </div>

                  {/* Results */}
                  {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="text-center p-4 bg-primary-50 rounded-xl"
                      >
                        <result.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary-950 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-primary-600">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div> */}

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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-16"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="heading-sm mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="body-md text-primary-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their growth
              with Vision Nectar. Let's create your success story together.
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
