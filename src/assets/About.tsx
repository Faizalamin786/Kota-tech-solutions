import { CheckCircle, Cpu } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const features = [
  'Certified & Background-Verified Technicians',
  'Genuine Parts & Components Only',
  'Transparent Pricing — No Hidden Charges',
  '90-Day Warranty on All Repairs',
  'Available 7 Days a Week',
  'Same Day Service in Most Areas',
];

const About = () => {
  const ref = useScrollAnimation();

  return (
    <section className="about-section section" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text animate-on-scroll">
            <div className="section-tag">{'// ABOUT US'}</div>
            <h2 className="section-title">
              Your Trusted Tech <span className="highlight">Repair Partner</span>
            </h2>
            <p>
              GreenTech Fix is a leading door-to-door computer and laptop repair service
              committed to providing fast, reliable, and affordable tech support right at
              your doorstep. We understand how important your devices are to your daily
              life and work.
            </p>
            <p>
              With over 8 years of experience and a team of 50+ certified technicians,
              we've successfully served 5,000+ happy customers across the city. Our
              mission is simple — fix your tech hassle-free.
            </p>
            <ul className="about-features">
              {features.map((f) => (
                <li key={f}>
                  <CheckCircle size={18} className="icon" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-image-card animate-on-scroll">
            <div className="main-card">
              <Cpu size={120} color="var(--neon-green)" strokeWidth={1} opacity={0.3} />
            </div>
            <div className="floating-badge top-right">⚡ 8+ Years</div>
            <div className="floating-badge bottom-left">🛡️ Certified Team</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
