'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles, Clock, Shield } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
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

  const benefits = [
    {
      icon: Clock,
      text: 'Setup in 48 hours',
    },
    {
      icon: Shield,
      text: 'Money-back guarantee',
    },
    {
      icon: Sparkles,
      text: 'ROI guaranteed in 30 days',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-800 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-800 rounded-full opacity-20"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="heading-lg mb-6">
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p variants={itemVariants} className="body-lg text-primary-200 mb-8">
            Join 500+ businesses already scaling with Vision Nectar. Get your AI-powered 
            growth system set up in just 48 hours with our money-back guarantee.
          </motion.p>

          {/* Benefits */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-primary-200">
                <benefit.icon className="w-5 h-5" />
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-primary-950 rounded-full font-bold text-lg hover:bg-primary-100 transition-all duration-300 group shadow-2xl hover:shadow-white/20"
              >
                Start Growing Today
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary-950 transition-all duration-300 shadow-lg hover:shadow-white/20"
              >
                Schedule Free Consultation
              </motion.button>
            </Link>
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm text-primary-300">
            No setup fees • No hidden costs • Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}