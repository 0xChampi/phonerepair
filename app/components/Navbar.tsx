'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-4" style={{ borderColor: 'var(--teal-green)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/phone-guys-logo.png"
              alt="Phone Guys"
              width={180}
              height={90}
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 font-semibold hover:text-teal-600 transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-gray-700 font-semibold hover:text-teal-600 transition-colors">
              Pricing
            </a>
            <a href="#why-choose-us" className="text-gray-700 font-semibold hover:text-teal-600 transition-colors">
              Why Us
            </a>
            <a href="#contact" className="text-gray-700 font-semibold hover:text-teal-600 transition-colors">
              Contact
            </a>
            <a
              href="tel:7576220444"
              className="px-6 py-3 bg-teal-600 text-white font-black rounded-xl hover:bg-teal-700 transition-all hover:scale-105 shadow-lg"
            >
              📞 (757) 622-0444
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-teal-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 flex flex-col gap-4">
            <a
              href="#services"
              className="text-gray-700 font-semibold hover:text-teal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-gray-700 font-semibold hover:text-teal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#why-choose-us"
              className="text-gray-700 font-semibold hover:text-teal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-gray-700 font-semibold hover:text-teal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="tel:7576220444"
              className="px-6 py-3 bg-teal-600 text-white font-black rounded-xl hover:bg-teal-700 transition-all text-center shadow-lg"
            >
              📞 (757) 622-0444
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
