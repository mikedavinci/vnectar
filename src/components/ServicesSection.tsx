'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Globe, Mail, BarChart3, Users, Zap } from 'lucide-react';

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const services = [
    {
      icon: Bot,
      title: 'AI Sales Chatbots',
      description: 'Custom-trained AI chatbots that engage visitors, qualify leads, and convert prospects 24/7 across all your platforms.',
      features: ['Multi-platform integration', 'Custom training', '24/7 availability', 'Lead qualification'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'High-Converting Landing Pages',
      description: 'Professionally designed landing pages optimized for maximum conversions with integrated lead capture forms.',
      features: ['Mobile-first design', 'A/B tested layouts', 'Lead capture forms', 'Fast loading'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'Social Media Campaigns',
      description: 'Data-driven social media campaigns that reach your target audience and drive qualified leads to your business.',
      features: ['Targeted advertising', 'Performance tracking', 'Multi-platform reach', 'ROI optimization'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Personalized email campaigns with 1000+ curated emails designed to nurture leads and drive conversions.',
      features: ['Automated sequences', 'Personalization', 'Performance analytics', 'List segmentation'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'CRM Integration',
      description: 'Seamless integration with your existing CRM systems to streamline lead management and customer relationships.',
      features: ['Seamless integration', 'Data synchronization', 'Lead tracking', 'Workflow automation'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Performance Analytics',
      description: 'Real-time tracking and analytics to monitor campaign performance and optimize for maximum ROI.',
      features: ['Real-time data', 'Custom dashboards', 'ROI tracking', 'Performance insights'],
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section ref={ref} id="services" className="section-padding bg-primary-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="heading-lg mb-6">
            Comprehensive AI Solutions
          </motion.h2>
          <motion.p variants={itemVariants} className="body-md text-primary-600 max-w-3xl mx-auto">
            From AI chatbots to complete marketing automation, we provide everything you need 
            to transform your business and accelerate growth.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 border border-primary-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary-950 mb-4">{service.title}</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-primary-700">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}