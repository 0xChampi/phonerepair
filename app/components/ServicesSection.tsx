export default function ServicesSection() {
  const devices = [
    {
      emoji: '📱',
      name: 'iPhone',
      repairs: ['Screen Replacement', 'Battery', 'Water Damage', 'Charging Port', 'Camera', 'Speaker'],
      priceRange: '$49 - $299',
      repairTime: '30-60 min',
      warranty: '90 days',
    },
    {
      emoji: '📱',
      name: 'Samsung & Android',
      repairs: ['Screen Replacement', 'Battery', 'Software Issues', 'Charging Port', 'Back Glass', 'Buttons'],
      priceRange: '$39 - $249',
      repairTime: '45-90 min',
      warranty: '90 days',
    },
    {
      emoji: '💻',
      name: 'Laptops',
      repairs: ['Screen Replacement', 'Keyboard', 'Hard Drive', 'RAM Upgrade', 'Virus Removal', 'OS Install'],
      priceRange: '$79 - $399',
      repairTime: '2-4 hours',
      warranty: '120 days',
    },
    {
      emoji: '📱',
      name: 'iPad & Tablets',
      repairs: ['Screen Replacement', 'Battery', 'Charging Port', 'Home Button', 'LCD', 'Digitizer'],
      priceRange: '$99 - $349',
      repairTime: '1-2 hours',
      warranty: '90 days',
    },
    {
      emoji: '🎮',
      name: 'Gaming Consoles',
      repairs: ['HDMI Port', 'Power Supply', 'Disc Drive', 'Controller Port', 'Overheating', 'Firmware'],
      priceRange: '$59 - $199',
      repairTime: '1-3 hours',
      warranty: '60 days',
    },
    {
      emoji: '⌚',
      name: 'Smart Watches',
      repairs: ['Screen Replacement', 'Battery', 'Band Replacement', 'Water Seal', 'Charging Issue', 'Software'],
      priceRange: '$49 - $159',
      repairTime: '30-60 min',
      warranty: '60 days',
    },
  ];

  return (
    <section className="services-section relative py-32 px-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mb-24 text-center">
        <h2 className="section-title text-5xl font-black mb-6" style={{ color: 'var(--gold)' }}>
          Devices We Repair
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Expert repairs for all your devices with transparent pricing
        </p>

        {/* Stats Bar */}
        <div className="flex justify-center items-center gap-10 flex-wrap mt-12 p-8 bg-white/15 rounded-3xl backdrop-blur-md shadow-xl w-full">
          <div className="text-center px-6">
            <div className="text-4xl font-black mb-2" style={{ color: 'var(--gold)' }}>10,000+</div>
            <div className="text-sm text-white/90 uppercase tracking-wider">Devices Repaired</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center px-6">
            <div className="text-4xl font-black mb-2" style={{ color: 'var(--gold)' }}>98%</div>
            <div className="text-sm text-white/90 uppercase tracking-wider">Success Rate</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center px-6">
            <div className="text-4xl font-black mb-2" style={{ color: 'var(--gold)' }}>4.9★</div>
            <div className="text-sm text-white/90 uppercase tracking-wider">Customer Rating</div>
          </div>
        </div>
      </div>

      {/* Devices Grid */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl mb-24 px-6">
        {devices.map((device, index) => (
          <div
            key={index}
            className="bg-white/95 backdrop-blur-sm px-8 py-8 rounded-2xl border border-white/50 transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:shadow-xl hover:border-lime-500 flex-shrink-0"
            style={{ width: '340px' }}
          >
            <div className="text-7xl mb-6 text-center">{device.emoji}</div>
            <h3 className="text-3xl font-black text-center mb-8" style={{ color: 'var(--gold)' }}>
              {device.name}
            </h3>

            <div className="grid grid-cols-2 gap-5 mb-8">
              <div className="bg-white/30 p-5 rounded-xl text-center">
                <div className="text-xs text-white/80 uppercase tracking-wider mb-2">From</div>
                <div className="text-lg font-bold text-white">{device.priceRange}</div>
              </div>
              <div className="bg-white/30 p-5 rounded-xl text-center">
                <div className="text-xs text-white/80 uppercase tracking-wider mb-2">Time</div>
                <div className="text-lg font-bold text-white">{device.repairTime}</div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-sm font-bold text-white/90 mb-5 uppercase tracking-wider">Common Repairs:</div>
              <div className="flex flex-wrap gap-3">
                {device.repairs.slice(0, 4).map((repair, idx) => (
                  <span key={idx} className="bg-white/25 text-white px-4 py-2 rounded-full text-xs font-semibold">
                    {repair}
                  </span>
                ))}
                {device.repairs.length > 4 && (
                  <span className="px-4 py-2 rounded-full text-xs font-semibold text-slate-800" style={{ background: 'var(--gold)' }}>
                    +{device.repairs.length - 4} more
                  </span>
                )}
              </div>
            </div>

            <div className="text-center p-5 bg-white/20 rounded-xl text-sm font-semibold text-white mb-8">
              🛡️ {device.warranty} warranty
            </div>

            <button className="w-full py-6 text-slate-800 border-none rounded-xl text-base font-black uppercase transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl" style={{ background: 'var(--gold)' }}>
              Get Quote
            </button>
          </div>
        ))}
      </div>

      {/* Emergency Banner */}
      <div className="w-full max-w-7xl rounded-3xl p-12 shadow-2xl" style={{ background: 'linear-gradient(135deg, var(--orange-red), var(--hot-pink))' }}>
        <div className="flex items-center justify-between gap-10 flex-wrap">
          <span className="text-6xl flex-shrink-0">🚨</span>
          <div className="flex-1 min-w-[250px]">
            <div className="text-3xl md:text-4xl font-black text-white mb-2">Emergency Repair Service</div>
            <div className="text-base md:text-lg text-white/90">Same-day repairs available for urgent cases</div>
          </div>
          <a href="tel:7576220444" className="bg-white text-pink-600 px-8 py-5 border-none rounded-xl text-base md:text-lg font-black whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-2xl flex-shrink-0 no-underline">
            Call Now: (757) 622-0444
          </a>
        </div>
      </div>
    </section>
  );
}
