'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const faqs = [
    {
      question: 'How quickly can you set up my AI chatbot and landing page?',
      answer:
        'We guarantee setup within 14 -21 days for our Ignite package. This includes your custom AI chatbot training, landing page deployment, and initial integrations. For more complex packages like Accelerate and Dominate, setup typically takes 2 - 3 weeks depending on the scope of integrations required.',
    },
    {
      question: 'What makes your AI chatbots different from others?',
      answer:
        "Our chatbots are powered by Anthropic's Claude Sonnet model and are custom-trained on your specific business data, products, and services. They integrate seamlessly across Facebook Messenger, WhatsApp, Instagram, and your website, providing consistent, intelligent responses that actually convert visitors into leads.",
    },
    {
      question: 'Do you really guarantee ROI in 30 days?',
      answer:
        "Yes! We guarantee at least 10 new qualified leads within 30 days for our Ignite package, and 3x more leads for our Accelerate package. If we don't meet these targets, we'll continue working at no additional cost until we do.",
    },
    // {
    //   question: "What happens if I'm not satisfied with the results?",
    //   answer:
    //     "We offer a comprehensive money-back guarantee. If you're not completely satisfied with our work or don't see the promised results within the guarantee period, we'll refund your investment. We're confident in our ability to deliver because we've successfully helped over 500 businesses.",
    // },
    {
      question: 'Can you integrate with my existing CRM and tools?',
      answer:
        "Absolutely! We specialize in CRM integrations including Salesforce, HubSpot, Pipedrive, Notion, and many others. Our team will ensure seamless data flow between your AI chatbot, landing pages, and existing business systems so you don't miss any leads.",
    },
    {
      question: 'How do the payment terms work?',
      answer:
        "We use a milestone-based payment structure: 50% upfront to begin work, and 50% upon completion and delivery. This protects both parties and ensures we're aligned on delivering results. No hidden fees or ongoing charges beyond what's outlined in your package.",
    },
    {
      question: 'What kind of businesses do you work with?',
      answer:
        'We work with businesses of all sizes, from startups to enterprises, across various industries including SaaS, e-commerce, professional services, healthcare, real estate, and more. Our AI solutions are customizable to fit any business model or industry requirements.',
    },
    {
      question:
        'Do I need technical knowledge to manage the systems you build?',
      answer:
        "Not at all! We design everything to be user-friendly and provide comprehensive training. You'll have an intuitive dashboard to monitor performance, and our team provides ongoing support. For our Dominate package, you even get a dedicated account manager.",
    },
    {
      question: "What's included in the social media campaign budget?",
      answer:
        "The ad spend budget is separate from our service fee and goes directly to the platforms (Facebook, Instagram, etc.). For Ignite, we include $150 minimum ad spend. For Accelerate, it's $400 minimum across 2 campaigns. This ensures your campaigns have enough budget to generate meaningful results.",
    },
    {
      question: 'Can I upgrade or downgrade my package later?',
      answer:
        "Yes! You can upgrade your package at any time, and we'll credit what you've already paid toward the higher tier. Downgrading is possible but may affect certain features. We'll work with you to find the best solution for your evolving business needs.",
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-primary-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="heading-lg mb-6">
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="body-md text-primary-600 max-w-3xl mx-auto"
          >
            Get answers to the most common questions about our AI solutions,
            pricing, and process. Still have questions? Contact us directly.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-primary-25 transition-colors duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-primary-950 pr-8 group-hover:text-primary-800 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <Minus className="w-6 h-6 text-primary-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-primary-600" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-primary-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        {/* <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary-950 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-primary-600 mb-6">
              Our team is here to help. Get personalized answers and a custom
              strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Contact Support
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
