'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Check,
  Star,
  Crown,
  Zap,
  ArrowRight,
  MessageCircle,
  Instagram,
  Phone,
  Video,
} from 'lucide-react';
import Link from 'next/link';

export default function PricingSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const plans = [
    {
      name: 'Ignite',
      subtitle: 'Perfect for Small Businesses',
      badge: '🔥 Most Popular',
      badgeColor: 'bg-orange-500',
      price: '$2400',
      monthlyPrice: '$240',
      duration: '/month (6mo min)',
      paymentTerms: '💰 50% at 1st milestone, 50% at completion',
      guarantee: '✅ ROI Guaranteed in 30 Days',
      leadGuarantee: '🎯 GUARANTEE: 10+ New Qualified Leads in 30 Days',
      platforms: [
        { icon: MessageCircle, name: 'Facebook Messenger' },
        { icon: Phone, name: 'WhatsApp' },
        { icon: Instagram, name: 'Instagram' },
      ],
      features: [
        '🎯 High-Converting Landing Page + Lead Capture Forms',
        '🤖 AI Sales Chatbot with Custom Training for Your Business',
        '📱 Multi-Platform Integration: Facebook, Instagram, WhatsApp',
        '🚀 1 Social Media Campaign (Min. $150 ad spend included)',
        '📱 Mobile App + AI Tokens Included (No Hidden Fees)',
      ],
      cta: '🚀 Start Growing Today',
      highlights: ['⚡ Setup in 48 hours', '💰 Money-back guarantee'],
      popular: true,
    },
    {
      name: 'Accelerate',
      subtitle: 'Scale Your Business Fast',
      badge: '⭐ Best Value',
      badgeColor: 'bg-blue-500',
      price: '$3900',
      monthlyPrice: '$320',
      duration: '/month (6mo min)',
      paymentTerms: '💰 50% at 1st milestone, 50% at completion',
      leadMultiplier: '🚀 3x More Leads Than Ignite',
      platforms: [
        { icon: MessageCircle, name: 'Facebook Messenger' },
        { icon: Phone, name: 'WhatsApp' },
        { icon: Instagram, name: 'Instagram' },
        { icon: Video, name: 'LiveChat' },
      ],
      features: [
        '✨ Everything in Ignite PLUS:',
        '🤖 CRM Integration - Integration for CRM',
        '📧 Automated Email Campaign: 1000 emails curated to personal target market',
        '🏠 Landing page to on ramp users to AI Chatbot',
        '📱 Facebook, Instagram, Whatsapp, Live Chat',
        '🚀 Run 2 Social media campaigns ($400 minimum budget)',
        "🤖 AI Powered using Anthropic's Claude Sonnet model",
      ],
      cta: '⭐ Scale My Business',
      highlights: ['🚀 Advanced automation', '📈 3x ROI guarantee'],
      popular: false,
    },
    {
      name: 'Dominate',
      subtitle: 'Full Influencer Marketing Suite',
      badge: '👑 Premium',
      badgeColor: 'bg-purple-500',
      price: 'Custom',
      monthlyPrice: 'Pricing Based on Scope',
      duration: '',
      paymentTerms: '💰 50% Upfront, 50% on final milestone',
      whiteGlove: '👑 White-Glove Service Included',
      platforms: [
        { icon: MessageCircle, name: 'Facebook Messenger' },
        { icon: Phone, name: 'WhatsApp' },
        { icon: Instagram, name: 'Instagram' },
        { icon: Video, name: 'LiveChat' },
        { icon: Phone, name: 'Viber' },
        { icon: Star, name: 'Custom' },
      ],
      features: [
        '✨ Everything in Accelerate PLUS:',
        '🎆 Full Influencer Program Management - We run everything',
        '🔍 Influencer Recruiting & Vetting - Find the perfect matches',
        '📈 Campaign Performance Tracking - Real-time analytics',
        '🎆 Dedicated Account Manager - White-glove service',
        '🤖 Custom AI Agent',
        'Language Learning Model',
      ],
      cta: '👑 Get Custom Quote',
      highlights: ['👑 White-glove service', '📞 Free consultation call'],
      popular: false,
      premium: true,
    },
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
          <motion.div variants={cardVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Limited Time: Save 20% on Annual Plans
            </span>
          </motion.div>
          <motion.h2 variants={cardVariants} className="heading-lg mb-6">
            Transform Your Business with AI
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="body-md text-primary-600 max-w-3xl mx-auto"
          >
            Join other businesses already using Vision Nectar to automate their
            workflows, capture more leads, and scale faster than ever before.
            Choose the plan that matches your growth ambitions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-white rounded-2xl shadow-soft border-2 transition-all duration-300 hover:shadow-strong ${
                plan.popular
                  ? 'border-orange-200 ring-2 ring-orange-100 shadow-orange-100/50'
                  : plan.premium
                  ? 'border-purple-200 ring-2 ring-purple-100 shadow-purple-100/50'
                  : 'border-primary-200 hover:border-primary-300 hover:shadow-primary-100/50'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 ${plan.badgeColor} text-white text-sm font-bold rounded-full shadow-xl animate-pulse`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-8 relative">
                {/* Subtle gradient overlay for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent rounded-2xl pointer-events-none" />
                )}
                {plan.premium && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent rounded-2xl pointer-events-none" />
                )}

                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-2xl font-bold text-primary-950 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-primary-600 mb-6 font-medium">
                    {plan.subtitle}
                  </p>

                  {/* Platforms */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {plan.platforms.map((platform, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-1 text-xs text-primary-700 bg-primary-100/80 px-3 py-1.5 rounded-full font-medium shadow-sm"
                      >
                        <platform.icon className="w-3 h-3" />
                        <span className="uppercase font-medium">
                          {platform.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-5xl font-bold text-primary-950 mb-3 font-display">
                      {plan.price}
                    </div>
                    <div className="text-primary-600 mb-3 text-sm font-medium bg-primary-50 px-3 py-1 rounded-full inline-block">
                      {plan.paymentTerms}
                    </div>
                    <div className="text-lg font-semibold text-primary-800">
                      {plan.monthlyPrice}
                      {plan.duration && (
                        <span className="text-sm font-normal text-primary-600 ml-1">
                          {plan.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Special guarantees */}
                  {plan.guarantee && (
                    <div className="text-green-600 font-semibold text-sm mb-2">
                      {plan.guarantee}
                    </div>
                  )}
                  {plan.leadGuarantee && (
                    <div className="text-blue-600 font-semibold text-sm mb-2">
                      {plan.leadGuarantee}
                    </div>
                  )}
                  {plan.leadMultiplier && (
                    <div className="text-orange-600 font-semibold text-sm mb-2">
                      {plan.leadMultiplier}
                    </div>
                  )}
                  {plan.whiteGlove && (
                    <div className="text-purple-600 font-semibold text-sm mb-2">
                      {plan.whiteGlove}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-10 relative z-10">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 group-hover:bg-green-200 transition-colors duration-200">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm text-primary-700 leading-relaxed font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href="/contact-us" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 group relative z-10 ${
                      plan.popular
                        ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-xl hover:shadow-2xl hover:shadow-orange-200/50'
                        : plan.premium
                        ? 'bg-purple-500 text-white hover:bg-purple-600 shadow-xl hover:shadow-2xl hover:shadow-purple-200/50'
                        : 'bg-primary-950 text-white hover:bg-primary-800 shadow-xl hover:shadow-2xl'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>

                {/* Highlights */}
                <div className="mt-6 text-center space-y-2 relative z-10">
                  {plan.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-primary-600 font-medium bg-primary-50/50 px-2 py-1 rounded-full inline-block mx-1"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-ons Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-800 rounded-full font-medium hover:bg-primary-200 transition-colors duration-300">
            Show Essential Add-Ons
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
