import { useFadeUp } from '../hooks/useFadeUp';

const CtaSection: React.FC = () => {
  const fade = useFadeUp<HTMLDivElement>();

  return (
    <section className="cta-section" id="book">
      <div className="cta-inner fade-up" ref={fade.ref} style={fade.style}>
        <div className="section-tag">✦ Get Started</div>
        <h2 className="cta-title">Begin Your Healing Journey Today</h2>
        <p className="cta-sub">
          Book a free 15-minute discovery call with Dr. Ashida — the first step
          towards natural wellness.
        </p>
        <a
          href="#"
          className="btn-primary"
          id="cta-book"
          style={{ fontSize: '1rem', padding: '1rem 2.2rem' }}
        >
          Book Free Consultation →
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
