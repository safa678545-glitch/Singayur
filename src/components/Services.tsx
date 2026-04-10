import { SERVICES } from '../data';
import { useFadeUp } from '../hooks/useFadeUp';

const Services: React.FC = () => {
  const headerFade = useFadeUp<HTMLDivElement>();

  return (
    <section className="services" id="services">
      <div className="section-header fade-up" ref={headerFade.ref} style={headerFade.style}>
        <div className="section-tag">✦ What We Offer</div>
        <h2 className="section-title">Our Services</h2>
        <p className="section-sub">
          Comprehensive Ayurvedic care designed for your unique constitution
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.name} service={service} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: (typeof SERVICES)[number];
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
  const fade = useFadeUp<HTMLDivElement>(0.12, `${delay}s`);

  return (
    <div
      className="service-card fade-up"
      ref={fade.ref}
      style={fade.style}
    >
      <div className="service-icon">{service.icon}</div>
      <div className="service-name">{service.name}</div>
      <p className="service-desc">{service.description}</p>
    </div>
  );
};

export default Services;
