import { Zap, BadgeDollarSign, ShieldCheck, Home, CreditCard, UserCheck } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './WhyChooseUs.css';

const reasons = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Same-day repair service. We value your time and get it done fast.' },
  { icon: BadgeDollarSign, title: 'No Fix No Fee', desc: "Can't fix it? You don't pay. Zero risk for you." },
  { icon: ShieldCheck, title: '90-Day Warranty', desc: 'All repairs come with a comprehensive 90-day service warranty.' },
  { icon: Home, title: 'Doorstep Service', desc: 'No need to carry your device anywhere. We come to you.' },
  { icon: CreditCard, title: 'Transparent Pricing', desc: 'No hidden charges, no surprises. Upfront quotes before any work.' },
  { icon: UserCheck, title: 'Certified Experts', desc: 'Background-verified and trained technicians you can trust.' },
];

const WhyChooseUs = () => {
  const ref = useScrollAnimation();

  return (
    <section className="why-section section" ref={ref}>
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <div className="section-tag">{'// WHY CHOOSE US'}</div>
          <h2 className="section-title">
            Why <span className="highlight">Kota-tech  Solution</span>?
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            We're not just another repair service. Here's what sets us apart.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card animate-on-scroll" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <r.icon size={32} className="why-icon" />
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
