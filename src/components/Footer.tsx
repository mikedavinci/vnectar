'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      'AI Chatbots',
      'Landing Pages',
      'Social Media Campaigns',
      'CRM Integration',
      'Email Marketing',
    ],
    Company: [
      'About Us',
      'Our Process',
      'Case Studies',
      'Careers',
      'Blog',
    ],
    Resources: [
      'Documentation',
      'Support Center',
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
    ],
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@visionnectar.com',
      href: 'mailto:hello@visionnectar.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <footer className="bg-primary-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logoWid.png"
                alt="Vision Nectar"
                width={180}
                height={60}
                className="h-12 w-auto transition-all duration-300 hover:scale-105"
              />
            </div>
            <p className="text-primary-300 text-sm leading-relaxed mb-6">
              Transform your business with cutting-edge AI solutions. We help companies 
              automate workflows, capture more leads, and scale faster than ever before.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-primary-800 border border-primary-700 rounded-l-lg text-sm text-white placeholder-primary-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-white text-primary-950 rounded-r-lg hover:bg-primary-100 transition-all duration-300 group">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-300 text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 text-primary-300 hover:text-white transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center group-hover:bg-primary-700 transition-colors duration-300">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-primary-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-primary-400 text-sm">
              © {currentYear} Vision Nectar. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-primary-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary-400 hover:text-white text-sm transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}