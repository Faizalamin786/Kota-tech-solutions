import { CheckCircle } from 'lucide-react';

import './Pricing.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const plans = [
  {
    name: 'Diagnosis',
    amount: '199',
    period: 'one-time',
    featured: false,
    features: [
      'Complete device diagnosis',
      'Detailed issue report',
      'Repair cost estimate',
      'Free if repair is booked',
    ],
  },
  {
    name: 'Standard Repair',
    amount: '499',
    period: 'starting price',
    featured: true,
    features: [
      'OS installation & setup',
      'Virus & malware removal',
      'Driver installation',
      'System optimization',
      '30-day service warranty',
    ],
  },
  {
    name: 'Premium Repair',
    amount: '1999',
    period: 'starting price',
    featured: false,
    features: [
      'Hardware replacement',
      'Screen & display repair',
      'Motherboard repair',
      'Data recovery service',
      '90-day service warranty',
    ],
  },
];

const Pricing = () => {
  const ref = useScrollAnimation();

  return (
    <section className="pricing-section section" id="pricing" ref={ref}>
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <div className="section-tag">{'// PRICING'}</div>
          <h2 className="section-title">
            Simple & <span className="highlight">Transparent</span> Pricing
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            No hidden charges. Pay only for what you need.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div className={`pricing-card animate-on-scroll ${plan.featured ? 'featured' : ''}`} key={i}>
              {plan.featured && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-plan-name">{plan.name}</div>
              <div className="pricing-amount">
                <span className="currency">₹</span>{plan.amount}+
              </div>
              <div className="pricing-period">{plan.period}</div>
              <ul className="pricing-features">
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <CheckCircle size={16} className="check" /> {f}
                  </li>
                ))}
              </ul>
              <button className={plan.featured ? 'btn-primary' : 'btn-ghost'} style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Now
              </button>
            </div>
          ))}
        </div>
        <p className="pricing-footnote">* Prices vary by device and issue. Parts cost extra.</p>
      </div>
    </section>
  );
};

export default Pricing;
