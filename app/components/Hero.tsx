import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-lime-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <Image
              src="/phone-guys-logo.png"
              alt="Phone Guys - We Repair"
              width={600}
              height={200}
              priority
              className="w-full max-w-2xl h-auto drop-shadow-sm"
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Device Repair{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-500">
              You Can Trust
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
            Fast turnaround • Quality parts • Expert technicians • Lifetime warranty
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-lime-600 to-lime-500 text-white font-semibold rounded-xl hover:from-lime-700 hover:to-lime-600 transition-all hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              Get Free Quote
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:7576220444"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-lime-500 hover:shadow-md transition-all inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (757) 622-0444
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Repairs Completed', value: '10,000+' },
            { label: 'Success Rate', value: '98%' },
            { label: 'Customer Rating', value: '4.9★' },
            { label: 'Years Experience', value: '9+' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/25 backdrop-blur-md rounded-xl border border-white/30">
              <div className="text-2xl md:text-3xl font-bold text-lime-600 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
