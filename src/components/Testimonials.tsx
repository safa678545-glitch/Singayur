import { useFadeUp } from '../hooks/useFadeUp';
import { useTestimonials } from '../hooks/useTestimonials';
import type { TestimonialRow } from '../lib/database.types';

const Testimonials: React.FC = () => {
  const headerFade = useFadeUp<HTMLDivElement>();
  const { testimonials, loading, error } = useTestimonials();

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header fade-up" ref={headerFade.ref} style={headerFade.style}>
        <div className="section-tag">✦ Patient Stories</div>
        <h2 className="section-title">What Our Patients Say</h2>
      </div>

      {loading ? (
        <div className="skeleton-grid testi-skeleton-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-line skeleton-stars" />
              <div className="skeleton-line skeleton-text" />
              <div className="skeleton-line skeleton-text" />
              <div className="skeleton-line skeleton-text short" />
              <div className="skeleton-line skeleton-title short" style={{ marginTop: 'auto' }} />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="data-message">
          <p>⚠ Unable to load testimonials.</p>
          <p className="data-message-sub">{error}</p>
        </div>
      ) : testimonials.length === 0 ? (
        <div className="data-message">
          <p>No testimonials yet. Be the first to share your experience!</p>
        </div>
      ) : (
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 0.08} />
          ))}
        </div>
      )}
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: TestimonialRow;
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
        {testimonial.location && (
          <span className="testi-loc">{testimonial.location}</span>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
