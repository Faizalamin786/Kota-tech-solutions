import { useRef, useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  { name: 'Rahul Sharma', location: 'Mahaveer Nagar 3 , Kota', initials: 'RS', text: 'Amazing service! The technician arrived within 2 hours and fixed my laptop screen perfectly. Highly recommend Kota-tech  Fix for anyone needing quick repairs.' },
  { name: 'Priya Patel', location: 'Indiranagar, Bundi', initials: 'PP', text: 'My desktop was infected with a nasty virus. The team cleaned it up completely and installed a proper antivirus. Very professional and affordable!' },
  { name: 'Amit Kumar', location: 'Indira Vigar, kota', initials: 'AK', text: 'Got my old laptop upgraded with SSD and extra RAM. It runs like new! The technician explained everything clearly. Great transparent pricing.' },
  { name: 'Sneha Reddy', location: 'Vigyan nagar, Kota', initials: 'SR', text: 'I was worried about my data when my hard drive crashed. Kota-tech  Fix recovered all my important files. Absolute lifesavers!' },
  { name: 'Vikram Singh', location: 'Mala road, Kota', initials: 'VS', text: 'Booked via WhatsApp, technician came same day. Fixed my MacBook keyboard issue at my home. No Fix No Fee policy gave me confidence.' },
  { name: 'Deepa Nair', location: 'Akashwani, Kota', initials: 'DN', text: 'We signed up for the AMC plan for our small office. Best decision ever — they handle all our IT issues promptly. Very reliable team.' },
];

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const next = (activeIndex + 1) % testimonials.length;
        const card = sliderRef.current.children[next] as HTMLElement;
        if (card) {
          sliderRef.current.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
          setActiveIndex(next);
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const scrollTo = (index: number) => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[index] as HTMLElement;
      if (card) {
        sliderRef.current.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' });
        setActiveIndex(index);
      }
    }
  };

  return (
    <section className="testimonials-section section" id="reviews">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-tag">{'// TESTIMONIALS'}</div>
          <h2 className="section-title">
            What Our <span className="highlight">Customers</span> Say
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Don't just take our word for it — hear from our happy customers.
          </p>
        </div>

        <div className="testimonials-slider" ref={sliderRef}>
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={18} fill="var(--neon-green)" stroke="var(--neon-green)" />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-location">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-dots">
          {testimonials.map((_, i) => (
            <button key={i} className={`slider-dot ${i === activeIndex ? 'active' : ''}`} onClick={() => scrollTo(i)} aria-label={`Go to testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
