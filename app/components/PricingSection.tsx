import PricingPackage from './PricingPackage';

export default function PricingSection() {
  const packages = [
    {
      packageType: 'basic' as const,
      name: 'Basic',
      originalPrice: 1800,
      discountPrice: 1656,
      description: 'Simple online presence to get started with your repair business',
      features: [
        'Single-page website',
        'Services overview',
        'Contact information',
        'Location & hours',
        'Mobile responsive',
        'SSL certificate',
        '1 year hosting',
        '1 round of revisions',
      ],
      addons: [
        { name: 'Contact Form', price: 92 },
        { name: 'Google Maps Integration', price: 184 },
        { name: 'Customer Testimonials', price: 184 },
        { name: 'Basic SEO Optimization', price: 276 },
        { name: 'Extra Revision Round', price: 184 },
      ],
      timeline: 'Ready in 3-4 weeks',
    },
    {
      packageType: 'essential' as const,
      name: 'Essential',
      originalPrice: 2800,
      discountPrice: 2576,
      description: 'Get your shop online with all the basics you need to start getting customers',
      features: [
        'Modern responsive website',
        'Services & pricing display',
        'Contact form',
        'Google Maps integration',
        'Customer testimonials',
        'Basic SEO optimization',
        'SSL certificate (HTTPS)',
        '1 year hosting included',
        '2 rounds of revisions',
        'Training on updates',
      ],
      addons: [
        { name: 'Quote Calculator', price: 368 },
        { name: 'Online Booking System', price: 460 },
        { name: 'Before/After Gallery', price: 276 },
        { name: 'FAQ Section', price: 184 },
        { name: 'WhatsApp Integration', price: 276 },
      ],
      timeline: 'Ready in 4-5 weeks',
    },
    {
      packageType: 'professional' as const,
      name: 'Professional',
      originalPrice: 4500,
      discountPrice: 4140,
      description: 'Complete solution with booking, SEO, and social media integration',
      features: [
        'Modern responsive website',
        'Services & pricing display',
        'Contact form & Google Maps',
        'Customer testimonials',
        'Quote calculator',
        'Online booking system',
        'Before/after gallery',
        'FAQ section',
        'WhatsApp integration',
        'Enhanced local SEO',
        'Google Business Profile setup',
        'Social media integration',
        '1 year hosting & SSL',
        '3 rounds of revisions',
      ],
      addons: [
        { name: 'Blog Section with SEO', price: 368 },
        { name: 'YouTube Channel Integration', price: 460 },
        { name: 'Appointment Reminders', price: 276 },
        { name: 'Analytics Dashboard', price: 460 },
        { name: 'Facebook/Instagram Feed', price: 368 },
      ],
      timeline: 'Ready in 5-6 weeks',
    },
    {
      packageType: 'premium' as const,
      name: 'Premium',
      originalPrice: 7200,
      discountPrice: 6624,
      description: 'Ultimate solution with AI, automation, branding, and full social media management',
      features: [
        'Everything in Professional',
        'AI-Powered Chatbot',
        'Custom Telegram Bot',
        '24/7 Automation',
        'Multi-language support',
        'Auto quote via chat',
        'CRM integration',
        'Priority support',
        'Professional branding package',
        'Logo & brand identity',
        'YouTube channel setup & optimization',
        'Social media content templates',
        'Multi-platform posting automation',
        'Video commercial (30 sec)',
      ],
      addons: [
        { name: 'Advanced Analytics Dashboard', price: 460 },
        { name: 'Lead Capture & Email Marketing', price: 552 },
        { name: 'AI Feedback Collection', price: 368 },
        { name: 'Phone System Integration', price: 460 },
        { name: 'Additional Video Commercial (60 sec)', price: 920 },
        { name: 'Social Media Management (3 months)', price: 1380 },
      ],
      timeline: 'Ready in 7-8 weeks',
    },
  ];

  return (
    <section className="pricing-section">
      <h2 className="section-title">Choose Your Fix</h2>
      <p className="section-subtitle">Pick the package that works for your business</p>

      <div className="packages-container">
        {packages.map((pkg, index) => (
          <PricingPackage key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
}
