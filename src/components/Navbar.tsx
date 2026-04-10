import { useState, useCallback } from 'react';
import { NAV_LINKS } from '../data';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <nav>
        <a href="#" className="nav-brand" id="nav-brand">
          <div className="nav-logo-box">✦</div>
          <span className="nav-brand-name">Singayur</span>
        </a>

        <ul className="nav-links" id="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={link.isButton ? 'btn-nav' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hamburger"
          id="hamburger"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        id="mobile-menu"
      >
        {NAV_LINKS.filter((l) => !l.isButton).map((link) => (
          <a key={link.label} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#book" className="btn-mob" onClick={closeMenu}>
          Book Free Consultation
        </a>
      </div>
    </>
  );
};

export default Navbar;
