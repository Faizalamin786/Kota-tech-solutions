import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
  const ref = useScrollAnimation();

  return (
    <section className="contact-section section" id="contact" ref={ref}>
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <div className="section-tag">{'// CONTACT US'}</div>
          <h2 className="section-title">
            Let's <span className="highlight">Connect</span>
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Have questions? Reach out to us through any of these channels.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-details animate-on-scroll">
            <div className="contact-item">
              <div className="contact-icon-circle"><Phone size={20} /></div>
              <div className="contact-item-text">
                <h4>Phone</h4>
                <p>+91 90796 96443</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-circle"><MessageCircle size={20} /></div>
              <div className="contact-item-text">
                <h4>WhatsApp</h4>
                <p>+91 90796 96443</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-circle"><Mail size={20} /></div>
              <div className="contact-item-text">
                <h4>Email</h4>
                <p>kotatechsolutions@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-circle"><MapPin size={20} /></div>
              <div className="contact-item-text">
                <h4>Location</h4>
                <p>Kota, Rajasthan</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-circle"><Clock size={20} /></div>
              <div className="contact-item-text">
                <h4>Working Hours</h4>
                <p>Mon – Sun, 9:00 AM – 9:00 PM</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="social-link" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>
<div className="contact-map animate-on-scroll">
  <h3 style={{ margin: "15px" }}>
    Kota Tech Solutions
  </h3>
  <iframe
    src="https://www.google.com/maps?q=25.1673328,75.8417438&z=18&output=embed"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Kota Tech Solutions Location"
  />
</div>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
