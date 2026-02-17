import { Zap, Play, CheckCircle, ChevronDown } from 'lucide-react';
import heroLaptop from '../../assets/hero-laptop.png';
import './Hero.css';

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animationDuration: `${4 + Math.random() * 4}s`,
  animationDelay: `${Math.random() * 3}s`,
  animationName: `particle-float-${(i % 3) + 1}`,
}));

const Hero = () => {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              animation: `${p.animationName} ${p.animationDuration} ease-in-out ${p.animationDelay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={16} /> #1 Doorstep Repair Service
          </div>
          <h1 className="hero-title">
            We Fix Your
            <span className="green-text">Computer &amp; Laptop</span>
            At Your Doorstep
          </h1>
          <p className="hero-subtitle">
            Fast, reliable, and affordable door-to-door tech support. Our certified
            technicians come to your home or office and fix your device on the spot.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToBooking}>
              Book a Repair →
            </button>
            <button className="btn-ghost" onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              <Play size={16} /> Watch How It Works
            </button>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-item">
              <CheckCircle size={16} className="check" /> Same Day Service
            </div>
            <div className="hero-trust-item">
              <CheckCircle size={16} className="check" /> No Fix No Fee
            </div>
            <div className="hero-trust-item">
              <CheckCircle size={16} className="check" /> 90 Day Warranty
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroLaptop} alt="Laptop with circuit board lines — GreenTech Fix repair service" />
        </div>
      </div>

      <div className="scroll-indicator">
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

export default Hero;
