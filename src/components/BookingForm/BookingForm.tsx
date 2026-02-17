import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './BookingForm.css';

const BookingForm = () => {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="booking-section section" id="booking" ref={ref}>
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-tag">{'// BOOK A REPAIR'}</div>
          <h2 className="section-title">
            Schedule Your <span className="highlight">Repair</span>
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Fill the form and we'll get back to you within 30 minutes.
          </p>
        </div>

        <div className="booking-grid">
          <div className="booking-info animate-on-scroll">
            <h3>Get in Touch</h3>
            <div className="booking-contact-item">
              <Phone size={20} className="icon" />
              <span>+91 98XXX XXXXX</span>
            </div>
            <div className="booking-contact-item">
              <MessageCircle size={20} className="icon" />
              <span>WhatsApp: +91 98XXX XXXXX</span>
            </div>
            <div className="booking-contact-item">
              <Mail size={20} className="icon" />
              <span>support@Kota-tech fix.com</span>
            </div>
            <div className="booking-contact-item">
              <MapPin size={20} className="icon" />
              <span>[Your City], India</span>
            </div>
            <div className="booking-contact-item">
              <Clock size={20} className="icon" />
              <span>Mon – Sun, 9:00 AM – 9:00 PM</span>
            </div>

            <div className="booking-trust-badges">
              <div className="booking-trust-item">
                <ShieldCheck size={16} className="icon" /> 90-Day Service Warranty
              </div>
              <div className="booking-trust-item">
                <CheckCircle size={16} className="icon" /> No Fix No Fee Policy
              </div>
              <div className="booking-trust-item">
                <CheckCircle size={16} className="icon" /> Genuine Parts Only
              </div>
            </div>
          </div>

          <div className="booking-form-card animate-on-scroll">
            {submitted ? (
              <div className="form-success">
                <CheckCircle size={56} className="success-icon" />
                <h3>Booking Submitted!</h3>
                <p>Thank you! Our team will contact you within 30 minutes to confirm your appointment.</p>
              </div>
            ) : (
              <>
                <h3>Book Your Repair</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input className="form-input" type="tel" placeholder="+91 98XXXXXXXX" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input className="form-input" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Device Type *</label>
                      <select className="form-select" required defaultValue="">
                        <option value="" disabled>Select device</option>
                        <option>Laptop</option>
                        <option>Desktop</option>
                        <option>Printer</option>
                        <option>MacBook</option>
                        <option>iMac</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Brand</label>
                      <select className="form-select" defaultValue="">
                        <option value="" disabled>Select brand</option>
                        <option>Dell</option>
                        <option>HP</option>
                        <option>Lenovo</option>
                        <option>Asus</option>
                        <option>Acer</option>
                        <option>Apple</option>
                        <option>Samsung</option>
                        <option>MSI</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Preferred Date</label>
                      <input className="form-input" type="date" />
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label">Address *</label>
                      <textarea className="form-input" rows={3} placeholder="Your full address" required></textarea>
                    </div>
                    <div className="form-group full-width">
                      <label className="form-label">Issue Description *</label>
                      <textarea className="form-input" rows={3} placeholder="Describe the issue with your device" required></textarea>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Time Slot</label>
                      <select className="form-select" defaultValue="">
                        <option value="" disabled>Preferred time</option>
                        <option>9:00 AM – 12:00 PM</option>
                        <option>12:00 PM – 3:00 PM</option>
                        <option>3:00 PM – 6:00 PM</option>
                        <option>6:00 PM – 9:00 PM</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Promo Code</label>
                      <input className="form-input" type="text" placeholder="Enter code (optional)" />
                    </div>
                    <div className="form-submit">
                      <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                        Submit Booking Request →
                      </button>
                    </div>
                    <div className="form-whatsapp-link">
                      <a href="https://wa.me/9198XXXXXXXX" target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={16} /> Or book via WhatsApp
                      </a>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
