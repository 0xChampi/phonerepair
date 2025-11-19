import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '88px' }}>
        <Hero />
        <InfoBar />
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="why-choose-us">
          <WhyChooseUs />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
      <ChatWidget />
    </>
  );
}
