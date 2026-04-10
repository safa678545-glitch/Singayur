import { STEPS } from '../data';
import { useFadeUp } from '../hooks/useFadeUp';

const HowItWorks: React.FC = () => {
  const headerFade = useFadeUp<HTMLDivElement>();

  return (
    <section className="hiw" id="how-it-works">
      <div className="section-header fade-up" ref={headerFade.ref} style={headerFade.style}>
        <div
          className="section-tag"
          style={{ background: 'rgba(200,145,58,0.2)', color: 'var(--gold)' }}
        >
          ✦ Your Journey
        </div>
        <h2 className="section-title">How It Works</h2>
        <p className="section-sub">
          Simple steps to begin your Ayurvedic wellness journey with Dr. Priya
        </p>
      </div>

      <div className="steps-grid">
        {STEPS.map((step, i) => (
          <StepCard key={step.number} step={step} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
};

interface StepCardProps {
  step: (typeof STEPS)[number];
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, delay }) => {
  const fade = useFadeUp<HTMLDivElement>(0.12, `${delay}s`);

  return (
    <div className="step fade-up" ref={fade.ref} style={fade.style}>
      <div className="step-num">{step.number}</div>
      <div>
        <div className="step-title">{step.title}</div>
        <p className="step-desc">{step.description}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
