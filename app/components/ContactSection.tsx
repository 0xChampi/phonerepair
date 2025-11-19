'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    issue: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact-section relative py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left Column */}
        <div className="p-6">
          <h2 className="text-5xl font-black mb-6" style={{ color: 'var(--gold)' }}>
            Get Your Free Quote Today
          </h2>
          <p className="text-lg text-white/80 mb-12 leading-relaxed">
            Fill out the form and we&apos;ll get back to you within 30 minutes during business hours.
          </p>

          {/* Contact Methods */}
          <div className="space-y-8 mb-12">
            {[
              { icon: '📞', label: 'Call Us', value: '(757) 622-0444', sub: 'Mon-Sat: 10AM-7PM', href: 'tel:7576220444' },
              { icon: '📧', label: 'Email Us', value: 'info@phoneguys.com', sub: 'Response within 2 hours', href: 'mailto:info@phoneguys.com' },
              { icon: '📍', label: 'Visit Us', value: '802 Granby St', sub: 'Norfolk, VA 23510', href: 'https://maps.google.com/?q=802+Granby+St+Norfolk+VA+23510' },
            ].map((method, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 bg-white/5 rounded-2xl border-2 border-white/10 transition-all duration-300 hover:bg-white/10"
                style={{ '--hover-border': 'var(--gold)' } as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gold)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <span className="text-5xl">{method.icon}</span>
                <div className="flex-1">
                  <div className="text-xs text-white/60 uppercase tracking-wider mb-2">{method.label}</div>
                  {method.href ? (
                    <a href={method.href} className="text-xl font-bold block mb-2 no-underline transition-colors" style={{ color: 'var(--gold)' }}>
                      {method.value}
                    </a>
                  ) : (
                    <div className="text-xl font-bold mb-2" style={{ color: 'var(--gold)' }}>{method.value}</div>
                  )}
                  <div className="text-sm text-white/70">{method.sub}</div>
                </div>
              </div>
            ))}

            {/* Live Chat */}
            <div className="flex items-start gap-6 p-6 bg-white/5 rounded-2xl border-2 border-white/10">
              <span className="text-5xl">💬</span>
              <div className="flex-1">
                <div className="text-xs text-white/60 uppercase tracking-wider mb-3">Live Chat</div>
                <button className="px-6 py-3 border-none rounded-lg font-bold transition-all duration-300 text-white" style={{ background: 'var(--teal-green)' }}>
                  Start Chat
                </button>
                <div className="text-sm text-white/70 mt-2">Available now</div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white/5 p-8 rounded-2xl border-2 border-white/10">
            <h4 className="text-lg font-bold mb-6" style={{ color: 'var(--gold)' }}>Business Hours</h4>
            <div className="space-y-4">
              {[
                { day: 'Monday - Saturday', time: '10:00 AM - 7:00 PM' },
                { day: 'Sunday', time: 'Closed' },
              ].map((hours, index) => (
                <div key={index} className="flex justify-between text-base text-white/80">
                  <span>{hours.day}</span>
                  <span className="font-bold text-white">{hours.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="p-6">
          <div className="bg-white/95 p-12 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-black text-slate-800 text-center mb-10">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-800">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="p-4 border-2 border-gray-300 rounded-xl text-base transition-all duration-300 focus:outline-none focus:shadow-lg"
                  style={{ fontFamily: 'inherit' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--teal-green)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 139, 125, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-800">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="p-4 border-2 border-gray-300 rounded-xl text-base transition-all duration-300 focus:outline-none focus:shadow-lg"
                    style={{ fontFamily: 'inherit' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--teal-green)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 139, 125, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold text-gray-800">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                    className="p-4 border-2 border-gray-300 rounded-xl text-base transition-all duration-300 focus:outline-none focus:shadow-lg"
                    style={{ fontFamily: 'inherit' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--teal-green)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 139, 125, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="device" className="text-sm font-bold text-gray-800">Device Type *</label>
                <select
                  id="device"
                  name="device"
                  value={formData.device}
                  onChange={handleChange}
                  required
                  className="p-4 border-2 border-gray-300 rounded-xl text-base transition-all duration-300 focus:outline-none focus:shadow-lg"
                  style={{ fontFamily: 'inherit' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--teal-green)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 139, 125, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="">Select your device...</option>
                  <option value="iphone">iPhone</option>
                  <option value="samsung">Samsung</option>
                  <option value="laptop">Laptop</option>
                  <option value="ipad">iPad</option>
                  <option value="console">Gaming Console</option>
                  <option value="watch">Smart Watch</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="issue" className="text-sm font-bold text-gray-800">Describe the Issue *</label>
                <textarea
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us what's wrong with your device..."
                  className="p-4 border-2 border-gray-300 rounded-xl text-base resize-y min-h-[120px] transition-all duration-300 focus:outline-none focus:shadow-lg"
                  style={{ fontFamily: 'inherit' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--teal-green)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(0, 139, 125, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-6 text-white border-none rounded-xl text-lg font-black uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: 'var(--teal-green)' }}
              >
                Get Free Quote
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">
                By submitting, you agree to our terms of service and privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="h-96 rounded-3xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #34495e, #2c3e50)' }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="text-8xl mb-5">📍</div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-3">Visit Our Store</div>
              <div className="text-base text-white/90 mb-5">802 Granby St, Norfolk, VA 23510</div>
              <a href="https://maps.google.com/?q=802+Granby+St+Norfolk+VA+23510" target="_blank" rel="noopener noreferrer" className="text-slate-800 px-8 py-4 border-none rounded-xl text-base font-black transition-all duration-300 hover:bg-white hover:scale-105 inline-block no-underline" style={{ background: 'var(--gold)' }}>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
