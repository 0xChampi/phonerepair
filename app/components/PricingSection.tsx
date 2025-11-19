export default function PricingSection() {
  const repairs = [
    { name: 'Screen Replacement', price: '$79 - $299', time: '30-45 min' },
    { name: 'Battery Replacement', price: '$49 - $99', time: '20-30 min' },
    { name: 'Charging Port Repair', price: '$59 - $129', time: '30-45 min' },
    { name: 'Camera Repair', price: '$69 - $179', time: '30-60 min' },
    { name: 'Water Damage Repair', price: '$99 - $249', time: '1-2 hours' },
    { name: 'Speaker Repair', price: '$59 - $119', time: '30-45 min' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Repair Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for all major phone repairs. Prices may vary based on device model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {repairs.map((repair, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-3">{repair.name}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">{repair.price}</div>
              <p className="text-gray-600">
                <span className="font-semibold">Time:</span> {repair.time}
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
