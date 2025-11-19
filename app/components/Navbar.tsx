'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/phone-guys-logo.png"
              alt="Phone Guys"
              width={220}
              height={60}
              className="h-12 w-auto transition-transform hover:scale-105"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#services" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 rounded-lg hover:bg-gray-50 transition-all">
              Services
            </a>
            <a href="#pricing" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 rounded-lg hover:bg-gray-50 transition-all">
              Pricing
            </a>
            <a href="#why-choose-us" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 rounded-lg hover:bg-gray-50 transition-all">
              Why Us
            </a>
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 rounded-lg hover:bg-gray-50 transition-all">
              Contact
            </a>
            <a
              href="tel:7576220444"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-sm font-semibold rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all hover:shadow-md flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (757) 622-0444
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              <a
                href="#services"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#pricing"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#why-choose-us"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </a>
              <a
                href="#contact"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="tel:7576220444"
                className="mt-2 px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-sm font-semibold rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (757) 622-0444
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
