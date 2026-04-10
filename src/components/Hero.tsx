import { HERO_STATS } from '../data';
import { useFadeUp } from '../hooks/useFadeUp';

const Hero: React.FC = () => {
  const textFade = useFadeUp<HTMLDivElement>();
  const imgFade = useFadeUp<HTMLDivElement>(0.12, '0.15s');

  return (
    <section className="hero" id="hero">
      <div className="hero-text fade-up" ref={textFade.ref} style={textFade.style}>
        <div className="section-tag">✦ Ayurvedic Healing in Singapore</div>
        <h1 className="hero-headline">
          Ancient Wisdom.<br />
          <em>Modern Healing.</em><br />
          Rooted in Nature.
        </h1>
        <p className="hero-sub">
          Personalised Ayurvedic care for the modern lifestyle. Dr. Priya guides
          you through holistic healing — naturally and effectively.
        </p>

        <div className="hero-stats">
          {HERO_STATS.map((stat, i) => (
            <div key={stat.label} style={{ display: 'contents' }}>
              {i > 0 && <div className="stat-divider" />}
              <div className="stat">
                <span className="stat-num">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-cta">
          <a href="#book" className="btn-primary" id="hero-cta-book">
            Book Free Consultation →
          </a>
          <a href="#services" className="btn-outline" id="hero-cta-services">
            Our Services
          </a>
        </div>
      </div>

      <div
        className="hero-image-wrap fade-up"
        ref={imgFade.ref}
        style={imgFade.style}
      >
        <div className="hero-img-card">
          <div className="hero-img-inner">Dr. Priya Nair</div>
        </div>
        <div className="hero-badge">
          <div className="badge-icon">🌿</div>
          <div className="badge-text">
            <span className="badge-title">Certified BAMS &amp; MD</span>
            <span className="badge-sub">Ayurvedic Physician</span>
          </div>
        </div>
        <div className="hero-badge2">
          <span>✦</span>
          Singapore<br />Licensed
        </div>
      </div>
    </section>
  );
};

export default Hero;
