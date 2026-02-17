import { Cpu } from 'lucide-react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <Cpu size={22} className="logo-icon" />
            <span><span className="green">Kota</span>Tech Fix</span>
          </div>
          <p className="footer-desc">
            Your trusted door-to-door computer and laptop repair service. Fast, reliable,
            and affordable tech support right at your doorstep.
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Laptop Repair</a></li>
            <li><a href="#services">Desktop Repair</a></li>
            <li><a href="#services">Virus Removal</a></li>
            <li><a href="#services">Data Recovery</a></li>
            <li><a href="#services">AMC Plans</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Contact Info</h4>
          <ul className="footer-links">
            <li><a href="tel:+919898989898">+91 98XXX XXXXX</a></li>
            <li><a href="mailto:support@Kota-tech fix.com">support@Kota-tech fix.com</a></li>
            <li><a href="#contact">[Your City], India</a></li>
            <li><a href="#contact">Mon–Sun, 9AM–9PM</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-newsletter">
        <p>Subscribe to our newsletter for tech tips & offers</p>
        <div className="newsletter-input-group">
          <input type="email" placeholder="Enter your email" />
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2024 Kota-tech  Fix. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
