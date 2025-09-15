'use client';

import { motion, Variants } from 'framer-motion';
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
      title: 'TechStart Solutions',
      category: 'SaaS Startup',
      description: 'TechStart Solutions was struggling with only 5 qualified leads per month and a 2% website conversion rate. Their small sales team was overwhelmed with unqualified inquiries, and they were spending $8,000/month on ads with minimal ROI. We implemented a custom AI chatbot trained on their product knowledge base, created a high-converting landing page with A/B tested elements, and launched targeted social media campaigns. Within 30 days, they were generating 150+ qualified leads monthly. The AI chatbot now handles 80% of initial inquiries, qualifying prospects before they reach the sales team. Their conversion rate jumped to 12%, and they\'re now generating $50K in new monthly recurring revenue. The founder said: "Vision Nectar didn\'t just improve our marketing - they transformed our entire business model."',
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
      description: 'Local Service Pro, a growing plumbing and HVAC company, was losing customers due to slow response times and missed calls. They were manually scheduling appointments during business hours only, losing 60% of after-hours inquiries. We deployed AI chatbots across WhatsApp, Facebook Messenger, and their website, integrated with their booking system. The chatbot handles service requests, provides instant quotes for common services, and schedules appointments 24/7. Customer satisfaction scores improved from 72% to 98%, and they now capture leads around the clock. The automated system reduced their administrative workload by 70%, allowing the team to focus on actual service delivery. Monthly bookings increased by 400%, and they expanded from 2 to 8 service technicians to meet demand.',
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
      description: 'E-commerce Empire, an online fashion retailer, was struggling with cart abandonment rates of 78% and email open rates below 15%. Their customer lifetime value was declining, and they were losing market share to competitors. We implemented a comprehensive AI-powered marketing automation system including personalized email campaigns, social media retargeting, and intelligent product recommendations. The AI analyzes customer behavior to send perfectly timed, personalized messages. Cart abandonment emails now convert at 35%, email open rates increased to 45%, and click-through rates improved by 300%. Customer retention increased to 85%, and average order value grew by 60%. The automated system now generates 250% more revenue than their previous manual campaigns, allowing them to scale from $100K to $350K monthly revenue.',
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
    <section ref={ref} id="portfolio" className="section-padding bg-white relative overflow-hidden">
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
            ease: "linear",
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
            ease: "linear",
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
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-150 rounded-full opacity-15"
        />
      </div>

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16 relative z-10"
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