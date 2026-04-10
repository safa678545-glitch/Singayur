import { FOOTER_COLUMNS, CONTACT_INFO } from '../data';

const Footer: React.FC = () => {
  return (
    <footer id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <div
            className="nav-brand"
            style={{
              marginBottom: '0.6rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <div className="nav-logo-box">✦</div>
            <span className="nav-brand-name">Singayur</span>
          </div>
          <p className="footer-tagline">Ancient Wisdom. Modern Healing.</p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul className="footer-links">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-col" id="contact-info">
          <h4>Contact</h4>
          <div className="footer-contact">
            {CONTACT_INFO.map((item) => (
              <div className="contact-item" key={item.text}>
                <span className="contact-icon">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Singayur. All rights reserved.</span>
        <span>
          <a href="#">Privacy Policy</a> &nbsp;|&nbsp;{' '}
          <a href="#">Terms of Service</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
