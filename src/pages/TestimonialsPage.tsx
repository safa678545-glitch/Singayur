import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <Link to="/" className="back-link" id="testi-back">
            ← Back to Home
          </Link>
          <div className="section-tag">✦ Patient Stories</div>
          <h1 className="page-hero-title">Testimonials</h1>
          <p className="page-hero-sub">
            Real stories from real patients who found healing through Ayurveda with Dr. Ashida Hussain.
          </p>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default TestimonialsPage;
