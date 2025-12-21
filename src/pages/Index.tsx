import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactsSection from '@/components/ContactsSection';

export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <ContactsSection />
    </div>
  );
}