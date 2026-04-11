import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  /** Detect if a link is a route (starts with /) vs an anchor (starts with #) */
  const isRoute = (href: string): boolean => href.startsWith('/');

  /** Check if a route link is currently active */
  const isActive = (href: string): boolean =>
    isRoute(href) && location.pathname === href;

  return (
    <>
      <nav>
        <Link to="/" className="nav-brand" id="nav-brand">
          <div className="nav-logo-box">✦</div>
          <span className="nav-brand-name">Singayur</span>
        </Link>

        <ul className="nav-links" id="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {isRoute(link.href) ? (
                <Link
                  to={link.href}
                  className={
                    link.isButton
                      ? 'btn-nav'
                      : isActive(link.href)
                        ? 'nav-active'
                        : undefined
                  }
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={link.isButton ? 'btn-nav' : undefined}
                >
                  {link.label}
                </a>
              )}
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
        {NAV_LINKS.filter((l) => !l.isButton).map((link) =>
          isRoute(link.href) ? (
            <Link key={link.label} to={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ) : (
            <a key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          )
        )}
        <a href="#book" className="btn-mob" onClick={closeMenu}>
          Book Free Consultation
        </a>
      </div>
    </>
  );
};

export default Navbar;
