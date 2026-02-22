import {
  Monitor, Laptop, ShieldCheck, Settings, HardDrive,
  MemoryStick, Wifi, Printer, Cpu, ArrowRight,
  Cctv,
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Services.css';

const services = [
  { icon: Laptop, title: 'Laptop Repair', desc: 'Professional laptop repair services in Kota including screen replacement, keyboard repair, battery replacement, hinge repair, and motherboard repair for all brands.' },
  { icon: Monitor, title: 'Desktop Repair', desc: 'Complete desktop computer repair with hardware diagnostics, component replacement, and full system repair by certified technicians.' },
  { icon: ShieldCheck, title: 'Virus Removal', desc: 'Fast malware cleanup and antivirus installation with security hardening to protect your computer from threats.' },
  { icon: Settings, title: 'OS Installation', desc: 'Professional Windows, Linux, and macOS fresh installation and complete system setup service.' },
  { icon: Cctv, title: 'CCTV Camera Installation', desc: 'Advanced surveillance systems installation for homes, businesses, and offices with professional setup.' },
  { icon: HardDrive, title: 'Data Recovery', desc: 'Expert data recovery services for lost or deleted files from damaged, corrupted, or failed drives.' },
  { icon: MemoryStick, title: 'Hardware Upgrade', desc: 'RAM upgrade, SSD installation, HDD replacement, and GPU upgrades for improved computer performance.' },
  { icon: Wifi, title: 'Network Setup', desc: 'WiFi configuration, router setup, LAN troubleshooting, and network optimization services.' },
  { icon: Printer, title: 'Printer Repair & Setup', desc: 'Professional printer installation, troubleshooting, driver installation, and regular maintenance service.' },
  { icon: Cpu, title: 'Custom PC Building', desc: 'Build your dream gaming or workstation PC with expert guidance and quality components.' },
];

const Services = () => {
  const ref = useScrollAnimation();

  return (
    <section className="services-section section" id="services" ref={ref}>
      <div className="container">
        <div className="animate-on-scroll">
          <div className="section-tag">{'// OUR SERVICES'}</div>
          <h2 className="section-title">
            Computer Repair Services in <span className="highlight">Kota</span>
          </h2>
          <p className="section-subtitle">
            Professional computer repair solutions for laptops, desktops, printers, networks, and more. Fast, reliable, and affordable service at your doorstep in Kota, Rajasthan.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article 
              className="service-card animate-on-scroll" 
              key={i} 
              style={{ transitionDelay: `${i * 0.05}s` }}
              itemScope 
              itemType="https://schema.org/Service"
            >
              <s.icon size={36} className="service-icon" />
              <h3 itemProp="name">{s.title}</h3>
              <p itemProp="description">{s.desc}</p>
              <span className="learn-more">Learn more <ArrowRight size={14} /></span>
            </article>
          ))}
        </div>

        <div className="services-cta" style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
            Looking for computer repair services in Kota? Kota Tech Solutions offers comprehensive repair, upgrade, and maintenance services for all types of computers and peripherals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
