import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './FAQ.css';

const faqs = [
  { q: 'How do I book a repair?', a: 'You can book through our website form, WhatsApp, or call us directly. We\'ll confirm your appointment within 30 minutes.' },
  { q: 'Which areas do you service?', a: 'We cover most areas within the city. During booking, our team will confirm if your location is serviceable.' },
  { q: 'What is covered under warranty?', a: 'Our 90-day warranty covers the specific repair performed. If the same issue recurs, we\'ll fix it free of charge.' },
  { q: 'What payment methods do you accept?', a: 'We accept cash, UPI (Google Pay, PhonePe, Paytm), bank transfer, and card payments.' },
  { q: 'How long does a typical repair take?', a: 'Most software repairs take 1-2 hours. Hardware repairs may take 2-4 hours depending on parts availability.' },
  { q: 'Do you use genuine parts?', a: 'Yes, we only use genuine and high-quality compatible parts. All parts come with their own warranty.' },
  { q: 'Is my data safe during repair?', a: 'Absolutely. Our technicians follow strict data privacy protocols. We never access personal files without your explicit consent.' },
  { q: 'What if you can\'t fix my device?', a: 'We follow a No Fix No Fee policy. If we can\'t resolve the issue, you don\'t pay anything for the service visit.' },
];

const FAQ = () => {
  const ref = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="faq-section section" ref={ref}>
      <div className="container">
        <div className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <div className="section-tag">{'// FAQ'}</div>
          <h2 className="section-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Got questions? We've got answers.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${activeIndex === i ? 'active' : ''}`} key={i}>
              <button className="faq-question" onClick={() => setActiveIndex(activeIndex === i ? null : i)}>
                {faq.q}
                <Plus size={20} className="faq-icon" />
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
