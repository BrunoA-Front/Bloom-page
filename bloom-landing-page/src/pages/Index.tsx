
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import TeamSection from '../components/sections/TeamSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ReadinessTestSection from '../components/sections/ReadinessTestSection';
import ContactSection from '../components/sections/ContactSection';
import FooterSection from '../components/sections/FooterSection';

const Index: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <PortfolioSection />
      <ReadinessTestSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;