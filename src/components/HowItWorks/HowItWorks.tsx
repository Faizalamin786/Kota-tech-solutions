import { CalendarCheck, UserCheck, Wrench, SmilePlus } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './HowItWorks.css';

const steps = [
  { num: 1, icon: CalendarCheck, title: 'Book a Service', desc: 'Schedule online, via WhatsApp, or give us a call.' },
  { num: 2, icon: UserCheck, title: 'Technician Arrives', desc: 'A certified technician arrives at your doorstep on time.' },
  { num: 3, icon: Wrench, title: 'Device Gets Fixed', desc: 'We diagnose and repair your device on the spot.' },
  { num: 4, icon: SmilePlus, title: 'Pay & Smile', desc: 'Pay only when satisfied. Enjoy our service warranty.' },
];

const HowItWorks = () => {
  const ref = useScrollAnimation();

  return (
    <section className="how-section section" id="how-it-works" ref={ref}>
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <div className="section-tag">{'// HOW IT WORKS'}</div>
          <h2 className="section-title">
            Simple <span className="highlight">4-Step</span> Process
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Getting your device fixed has never been easier.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((s) => (
            <div className="step-item animate-on-scroll" key={s.num}>
              <div className="step-number">{s.num}</div>
              <s.icon size={28} className="step-icon" />
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
