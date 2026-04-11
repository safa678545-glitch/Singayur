import Ticker from '../components/Ticker';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Conditions from '../components/Conditions';
import HowItWorks from '../components/HowItWorks';
import CtaSection from '../components/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Ticker />
      <Hero />
      <About />
      <Services />
      <Conditions />
      <HowItWorks />
      <CtaSection />
    </>
  );
};

export default HomePage;
