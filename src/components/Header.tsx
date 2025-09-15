'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Use dark styling for sign-in page or when scrolled
  const useDarkStyling = isScrolled || pathname === '/sign-in';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  // Function to get the correct href based on current path
  const getNavHref = (href: string) => {
    // If we're not on the home page, prepend the root path
    return pathname !== '/' ? `/${href}` : href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useDarkStyling
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/images/logoWid.png"
                alt="Vision Nectar"
                width={120}
                height={40}
                className={`h-8 sm:h-10 w-auto transition-all duration-300 hover:scale-105 ${
                  useDarkStyling ? 'brightness-0' : 'brightness-0 invert'
                }`}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={getNavHref(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-yellow-400 relative group animate-slide-down ${
                  useDarkStyling ? 'text-primary-800' : 'text-white drop-shadow-lg'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    useDarkStyling ? 'bg-primary-800' : 'bg-yellow-400'
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="/contact-us">
              <button
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in ${
                  useDarkStyling
                    ? 'bg-primary-950 text-white hover:bg-primary-800'
                    : 'bg-primary-950 text-white hover:bg-primary-800 shadow-lg'
                }`}
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                useDarkStyling
                  ? 'text-primary-800 hover:bg-primary-100'
                  : 'text-white hover:bg-white/20 drop-shadow-lg'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-primary-200 animate-slide-down">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={getNavHref(item.href)}
                  className="block text-primary-800 font-medium hover:text-primary-600 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Link href="/contact-us" className="w-full">
                <button
                  className="w-full mt-4 px-6 py-3 bg-primary-950 text-white rounded-full font-medium hover:bg-primary-800 transition-all duration-300 animate-scale-in"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
