'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-primary-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-primary-150 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Limited Time Offer Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-primary-950 text-white rounded-full text-sm font-medium shadow-lg">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              Limited Time: Save 20% on Annual Plans
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="heading-xl mb-6">
            <span className="gradient-text">Transform Your Business</span>
            <br />
            <span className="text-primary-950">with AI</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="body-lg text-primary-600 mb-8 max-w-3xl mx-auto">
            Join <span className="font-bold text-primary-950">500+ businesses</span> already using Vision Nectar to 
            automate their workflows, capture more leads, and scale faster than ever before. 
            Choose the plan that matches your growth ambitions.
          </motion.p>

          {/* Social Proof Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-950 mb-2">500+</div>
              <div className="text-sm text-primary-600">Active Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-950 mb-2">10x</div>
              <div className="text-sm text-primary-600">Lead Generation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-950 mb-2">30 Days</div>
              <div className="text-sm text-primary-600">ROI Guarantee</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group"
            >
              Start Growing Today
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Feature Icons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-8 text-primary-600">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Setup in 48 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span className="text-sm font-medium">Money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">ROI Guaranteed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}