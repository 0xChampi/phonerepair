export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Professional Phone Repair Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Fast, reliable, and affordable repairs for all smartphone brands.
          Get your device fixed by certified technicians today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Pricing
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
