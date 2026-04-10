import { CONDITIONS } from '../data';
import { useFadeUp } from '../hooks/useFadeUp';

const Conditions: React.FC = () => {
  const introFade = useFadeUp<HTMLDivElement>();
  const gridFade = useFadeUp<HTMLDivElement>(0.12, '0.1s');

  return (
    <section className="conditions" id="conditions">
      <div className="conditions-layout">
        <div className="conditions-intro fade-up" ref={introFade.ref} style={introFade.style}>
          <div className="section-tag">✦ Conditions Treated</div>
          <h2 className="section-title">We Treat Root Causes</h2>
          <p className="section-sub" style={{ marginTop: '0.5rem' }}>
            Natural, holistic solutions for chronic and lifestyle conditions using
            time-tested Ayurvedic principles.
          </p>
        </div>
        <div
          className="conditions-grid fade-up"
          ref={gridFade.ref}
          style={gridFade.style}
        >
          {CONDITIONS.map((condition) => (
            <div className="condition-pill" key={condition.label}>
              <div className="condition-dot" />
              {condition.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
