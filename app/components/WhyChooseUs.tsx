'use client';

export default function WhyChooseUs() {
  const features = [
    {
      icon: '⚡',
      title: 'Fast Service',
      description: 'Most repairs completed same day. We value your time.',
      details: ['30-minute express repairs', 'While-you-wait service', 'Real-time status updates'],
    },
    {
      icon: '💯',
      title: 'Quality Parts',
      description: 'We use only high-quality, tested parts with warranty.',
      details: ['OEM & premium aftermarket', 'Rigorous quality testing', 'Lifetime installation warranty'],
    },
    {
      icon: '🛡️',
      title: 'Warranty',
      description: 'All repairs backed by our comprehensive warranty.',
      details: ['60-120 day warranty', 'Free re-repairs if needed', 'Money-back guarantee'],
    },
    {
      icon: '💰',
      title: 'Fair Pricing',
      description: 'Transparent, competitive prices with no hidden fees.',
      details: ['Free diagnostics', 'Price match guarantee', 'Upfront pricing'],
    },
    {
      icon: '🔒',
      title: 'Data Security',
      description: 'Your privacy and data protection is our priority.',
      details: ['Secure handling protocols', 'Data privacy guaranteed', 'No data access without consent'],
    },
    {
      icon: '👨‍🔧',
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience.',
      details: ['Industry-certified techs', '10+ years experience', 'Ongoing training'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Fixed my iPhone screen in 30 minutes! Great service and fair price. Highly recommend!',
      device: 'iPhone 13',
    },
    {
      name: 'Mike Chen',
      rating: 5,
      text: 'My laptop was running so slow, they upgraded the RAM and cleaned it up. Runs like new!',
      device: 'MacBook Pro',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'Water damaged my phone, thought it was done. They saved all my photos! Amazing work.',
      device: 'Samsung S23',
    },
  ];

  const guarantees = [
    { icon: '✓', text: 'No Fix, No Fee Policy' },
    { icon: '✓', text: 'Free Diagnostic Service' },
    { icon: '✓', text: 'Same-Day Repairs Available' },
    { icon: '✓', text: 'Lifetime Installation Warranty' },
    { icon: '✓', text: 'Price Match Guarantee' },
    { icon: '✓', text: '100% Satisfaction Guaranteed' },
  ];

  return (
    <section className="why-section relative py-32 px-8 flex flex-col items-center">
      <div className="w-full max-w-7xl text-center mb-24">
        <h2 className="section-title text-5xl font-black mb-6" style={{ color: 'var(--teal-green)' }}>
          Why Choose Phone Guys?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">We&apos;re your trusted local repair experts</p>
      </div>

      {/* Features Grid */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl mb-24 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm px-8 py-8 rounded-2xl transition-all duration-300 border border-gray-300/50 hover:border-lime-500 hover:-translate-y-2 hover:shadow-2xl flex-shrink-0"
            style={{ width: '340px' }}
          >
            <div className="text-6xl mb-6 text-center">{feature.icon}</div>
            <h3 className="text-2xl font-black mb-4 text-center" style={{ color: 'var(--teal-green)' }}>
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-center">{feature.description}</p>
            <ul className="space-y-5">
              {feature.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm">
                  <span className="font-black text-base" style={{ color: 'var(--teal-green)' }}>✓</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Guarantees Section */}
      <div className="w-full max-w-7xl my-24 p-12 rounded-3xl shadow-2xl" style={{ background: 'linear-gradient(135deg, var(--lime-green), #65a30d)' }}>
        <h3 className="text-4xl font-black text-white text-center mb-12 uppercase">Our Guarantees</h3>
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-lg px-8 py-7 rounded-xl flex items-center gap-5 flex-shrink-0"
              style={{ width: '340px' }}
            >
              <span className="text-3xl flex-shrink-0" style={{ color: 'var(--gold)' }}>{guarantee.icon}</span>
              <span className="text-base font-bold text-white">{guarantee.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full max-w-7xl my-24">
        <h3 className="text-4xl font-black text-center mb-12 uppercase" style={{ color: 'var(--teal-green)' }}>
          What Our Customers Say
        </h3>
        <div className="flex flex-wrap justify-center gap-8 w-full px-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm px-8 py-8 rounded-2xl border border-gray-300/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-lime-500 flex-shrink-0"
              style={{ width: '340px' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black text-white flex-shrink-0" style={{ background: 'var(--teal-green)' }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="text-base font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-lg" style={{ color: 'var(--gold)' }}>
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-5 italic text-base">&quot;{testimonial.text}&quot;</p>
              <div className="text-sm text-gray-500 font-semibold">Repaired: {testimonial.device}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex justify-center gap-8 flex-wrap w-full max-w-7xl mt-24 px-6">
        {[
          { icon: '🏆', text: 'Award Winning Service' },
          { icon: '🔐', text: 'BBB Accredited' },
          { icon: '📜', text: 'Licensed & Insured' },
          { icon: '💚', text: 'Eco-Friendly Recycling' },
        ].map((badge, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm px-8 py-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 border border-gray-300/50 hover:border-lime-500 hover:shadow-lg flex-shrink-0"
            style={{ minWidth: '220px' }}
          >
            <div className="text-5xl mb-4">{badge.icon}</div>
            <div className="text-sm font-bold text-gray-800">{badge.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
