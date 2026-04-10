import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Services from './components/Services';
import Conditions from './components/Conditions';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Ticker />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Conditions />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
};

export default App;
