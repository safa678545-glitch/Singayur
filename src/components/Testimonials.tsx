import { TESTIMONIALS } from '../data';
import { useFadeUp } from '../hooks/useFadeUp';

const Testimonials: React.FC = () => {
  const headerFade = useFadeUp<HTMLDivElement>();

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header fade-up" ref={headerFade.ref} style={headerFade.style}>
        <div className="section-tag">✦ Patient Stories</div>
        <h2 className="section-title">What Our Patients Say</h2>
      </div>

      <div className="testi-grid">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: (typeof TESTIMONIALS)[number];
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay }) => {
  const fade = useFadeUp<HTMLDivElement>(0.12, `${delay}s`);

  return (
    <div className="testi-card fade-up" ref={fade.ref} style={fade.style}>
      <div className="testi-stars">
        {'★'.repeat(testimonial.stars)}
      </div>
      <p className="testi-quote">"{testimonial.quote}"</p>
      <div className="testi-author">
        <span className="testi-name">{testimonial.name}</span>
        <span className="testi-loc">{testimonial.location}</span>
      </div>
    </div>
  );
};

export default Testimonials;
