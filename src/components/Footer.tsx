'use client';

import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
  ];

  return (
    <footer className="bg-white border-t border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Information and Logo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              className="flex flex-col items-center text-center space-y-3 text-primary-700 hover:text-primary-950 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                <info.icon size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-950 mb-1">
                  {info.label}
                </p>
                <p className="text-sm font-medium">{info.value}</p>
              </div>
            </a>
          ))}

          {/* Logo */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-32 h-32 flex items-center justify-center">
              <Image
                src="/images/logoWid.png"
                alt="Vision Nectar Logo"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            {/* <div>
              <p className="text-sm font-semibold text-primary-950">
                Vision Nectar
              </p>
            </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-200 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-primary-600 text-sm">
              © {currentYear} Vision Nectar. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-primary-600 hover:text-primary-950 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-600 hover:text-primary-950 text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-primary-600 hover:text-primary-950 text-sm transition-colors duration-300"
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
