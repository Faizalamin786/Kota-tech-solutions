import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import './FloatingElements.css';

const FloatingElements = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowBackToTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <a
        href="https://wa.me/9198XXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="mobile-sticky-cta">
        <button className="btn-primary" onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}>
          📞 Book a Repair Now
        </button>
      </div>
    </>
  );
};

export default FloatingElements;
