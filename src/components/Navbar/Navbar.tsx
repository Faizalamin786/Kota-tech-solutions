import { useState, useEffect } from 'react';
import { Cpu, Menu, X } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-logo" onClick={() => handleNavClick('#home')}>
            <Cpu size={24} className="logo-icon" />
            <span><span className="green">Green</span>Tech Fix</span>
          </div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  href={item.href}
                  className={activeSection === item.href.slice(1) ? 'active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <button className="btn-primary" onClick={() => handleNavClick('#booking')}>
              Book Now
            </button>
          </div>

          <button className="hamburger" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>
          <X size={24} />
        </button>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
          >
            {item.label}
          </a>
        ))}
        <button className="btn-primary" onClick={() => handleNavClick('#booking')} style={{ marginTop: 16 }}>
          Book Now
        </button>
      </div>
    </>
  );
};

export default Navbar;
