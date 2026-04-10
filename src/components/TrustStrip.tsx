import { TRUST_ITEMS } from '../data';

const TrustStrip: React.FC = () => {
  return (
    <div className="trust-strip" id="trust-strip">
      <div className="trust-inner">
        {TRUST_ITEMS.map((item) => (
          <span className="trust-item" key={item.text}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;
