export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Certified Technicians',
      description: 'Our team consists of factory-trained and certified repair specialists.',
    },
    {
      title: 'Genuine Parts',
      description: 'We use only high-quality, genuine parts for all repairs.',
    },
    {
      title: 'Same-Day Service',
      description: 'Most repairs are completed the same day you bring your device in.',
    },
    {
      title: 'Lifetime Warranty',
      description: 'All our repairs come with a 90-day warranty for your peace of mind.',
    },
    {
      title: 'Competitive Pricing',
      description: 'We offer the best prices in town with no hidden fees.',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Over 10,000 satisfied customers and a 5-star rating.',
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the best repair experience with quality service and customer care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
