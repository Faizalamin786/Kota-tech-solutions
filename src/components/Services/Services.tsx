import {
  Monitor, Laptop, ShieldCheck, Settings, HardDrive,
  MemoryStick, Wifi, Printer, Cpu, ArrowRight,
  Cctv,
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Services.css';

const services = [
  { icon: Laptop, title: 'Laptop Repair', desc: 'Screen, keyboard, battery, hinge, and motherboard repair for all brands.' },
  { icon: Monitor, title: 'Desktop Repair', desc: 'Hardware diagnostics, component replacement, and full system repair.' },
  { icon: ShieldCheck, title: 'Virus Removal', desc: 'Malware cleanup, antivirus installation, and security hardening.' },
  { icon: Settings, title: 'OS Installation', desc: 'Windows, Linux, and macOS fresh installation and setup.' },
  { icon: Cctv, title: 'CCTV Camera', desc: 'Advanced surveillance systems for homes, businesses, and offices.' },
  { icon: HardDrive, title: 'Data Recovery', desc: 'Recover lost or deleted files from damaged or corrupted drives.' },
  { icon: MemoryStick, title: 'Hardware Upgrade', desc: 'RAM, SSD, HDD, and GPU upgrades for better performance.' },
  { icon: Wifi, title: 'Network Setup', desc: 'WiFi configuration, router setup, and LAN troubleshooting.' },
  { icon: Printer, title: 'Printer Repair', desc: 'Printer installation, troubleshooting, and regular maintenance.' },
 

  { icon: Cpu, title: 'Custom PC Build', desc: 'Build your dream gaming or workstation PC with expert guidance.' },
];

const Services = () => {
  const ref = useScrollAnimation();

  return (
    <section className="services-section section" id="services" ref={ref}>
      <div className="container">
        <div className="animate-on-scroll">
          <div className="section-tag">{'// OUR SERVICES'}</div>
          <h2 className="section-title">
            What We <span className="highlight">Fix</span>
          </h2>
          <p className="section-subtitle">
            From laptops to desktops, printers to networks — we handle it all at your doorstep.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card animate-on-scroll" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
              <s.icon size={36} className="service-icon" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="learn-more">Learn more <ArrowRight size={14} /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
