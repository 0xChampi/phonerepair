'use client';

export default function Footer() {
  return (
    <footer className="bg-[#1a252f] text-gray-400">
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">📱</span>
              <span className="text-3xl font-black" style={{ color: 'var(--gold)' }}>Phone Guys</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Your trusted local device repair experts since 2015. Quality repairs, honest pricing, guaranteed satisfaction.
            </p>
            <div className="flex gap-5">
              {['📘', '📷', '🐦', '📺', '🎵'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 flex items-center justify-center bg-white/5 rounded-xl text-2xl no-underline transition-all duration-300 hover:-translate-y-1"
                  style={{ '--hover-bg': 'var(--gold)' } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="flex flex-col">
            <h4 className="text-lg font-black mb-8 uppercase tracking-wider" style={{ color: 'var(--gold)' }}>Services</h4>
            <ul className="flex flex-col gap-4 list-none">
              {['iPhone Repair', 'Samsung Repair', 'Laptop Repair', 'iPad Repair', 'Console Repair', 'Watch Repair', 'Data Recovery', 'Accessories'].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 no-underline text-sm transition-all duration-300 hover:pl-1" style={{ '--hover-color': 'var(--gold)' } as React.CSSProperties}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-lg font-black mb-8 uppercase tracking-wider" style={{ color: 'var(--gold)' }}>Quick Links</h4>
            <ul className="flex flex-col gap-4 list-none">
              {['About Us', 'Pricing', 'Warranty Info', 'FAQ', 'Repair Tips Blog', 'Careers', 'Wholesale', 'Franchise Opportunities'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 no-underline text-sm transition-all duration-300 hover:pl-1" style={{ '--hover-color': 'var(--gold)' } as React.CSSProperties}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-lg font-black mb-8 uppercase tracking-wider" style={{ color: 'var(--gold)' }}>Contact Info</h4>
            <ul className="flex flex-col gap-6 list-none">
              {[
                { icon: '📞', href: 'tel:7576220444', value: '(757) 622-0444', sub: 'Mon-Sat: 10AM-7PM' },
                { icon: '📧', href: 'mailto:info@phoneguys.com', value: 'info@phoneguys.com', sub: 'Email Support' },
                { icon: '📍', href: null, value: '802 Granby St', sub: 'Norfolk, VA 23510' },
                { icon: '⏰', href: null, value: 'Mon-Sat: 10AM-7PM', sub: 'Sunday: Closed' },
              ].map((contact, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-2xl">{contact.icon}</span>
                  <div>
                    {contact.href ? (
                      <a href={contact.href} className="font-bold no-underline transition-colors" style={{ color: 'var(--gold)' }}>
                        {contact.value}
                      </a>
                    ) : (
                      <span className="font-bold" style={{ color: 'var(--gold)' }}>{contact.value}</span>
                    )}
                    <span className="block text-xs text-gray-600 mt-1">{contact.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div className="flex flex-col">
            <h4 className="text-lg font-black mb-8 uppercase tracking-wider" style={{ color: 'var(--gold)' }}>Newsletter</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Get repair tips, special offers, and news delivered to your inbox.
            </p>
            <form className="flex gap-3 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 border-2 border-white/10 bg-white/5 rounded-lg text-white text-sm placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="text-white border-none px-5 py-3 rounded-lg font-bold transition-all duration-300"
                style={{ background: 'var(--teal-green)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gold)';
                  e.currentTarget.style.color = '#2c3e50';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--teal-green)';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-2 flex-wrap">
              {['🏅 BBB A+', '✓ Licensed', '🔐 Insured'].map((cert, index) => (
                <div key={index} className="bg-white/5 px-4 py-2 rounded-full text-xs font-bold text-gray-400">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#0f1619] py-10 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-10 flex-wrap">
          <div>
            <p className="text-sm text-gray-500 m-0">&copy; 2024 Phone Guys - We Repair. All Rights Reserved.</p>
            <p className="text-xs text-gray-700 m-0 mt-1">Professional Device Repair Services</p>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            {['Privacy Policy', 'Terms of Service', 'Sitemap', 'Accessibility'].map((link, index) => (
              <span key={index} className="flex items-center gap-4">
                {index > 0 && <span className="text-gray-700">•</span>}
                <a href="#" className="text-gray-400 no-underline text-sm transition-colors" style={{ '--hover-color': 'var(--gold)' } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  {link}
                </a>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">We Accept:</span>
            <div className="flex gap-3">
              {['💵', '💳', '📱', '💰'].map((icon, index) => (
                <span key={index} className="text-2xl">{icon}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
