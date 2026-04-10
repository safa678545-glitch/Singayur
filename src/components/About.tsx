import { CREDENTIALS } from '../data';
import { useFadeUp } from '../hooks/useFadeUp';

const About: React.FC = () => {
  const imgFade = useFadeUp<HTMLDivElement>();
  const contentFade = useFadeUp<HTMLDivElement>(0.12, '0.1s');

  return (
    <section className="about" id="about">
      <div className="about-img-wrap fade-up" ref={imgFade.ref} style={imgFade.style}>
        <div className="about-img">Dr. Priya's Photo</div>
        <div className="about-img-badge">
          <strong>8+</strong>
          Years of<br />Practice
        </div>
      </div>

      <div
        className="about-content fade-up"
        ref={contentFade.ref}
        style={contentFade.style}
      >
        <div className="section-tag">✦ Meet Your Doctor</div>
        <h2 className="about-name">
          Dr. Priya Nair<br />Ayurvedic Physician
        </h2>
        <span className="about-title">
          Healing Holistically, One Patient at a Time
        </span>
        <span className="about-qual">
          BAMS · MD Ayurveda · 8+ Years Experience
        </span>

        <p className="about-desc">
          With over 8 years of experience practicing Ayurveda across India and
          Singapore, Dr. Priya treats root causes — not just symptoms. Her approach
          blends classical Ayurvedic principles with modern diagnostic insight for
          truly personalised care.
        </p>

        <div className="about-credentials">
          {CREDENTIALS.map((cred) => (
            <div className="cred-item" key={cred.text}>
              <div className="cred-dot" />
              {cred.text}
            </div>
          ))}
        </div>

        <div>
          <a
            href="#book"
            className="btn-primary"
            id="about-cta"
            style={{ marginTop: '0.5rem' }}
          >
            Book a Consultation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
