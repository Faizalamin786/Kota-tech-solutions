import { Users, Award, Wrench, Star } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';
import './Stats.css';

const StatItem = ({ icon: Icon, target, suffix, label }: { icon: React.ElementType; target: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(target);
  return (
    <div className="stat-item" ref={ref}>
      <Icon size={28} className="stat-icon" />
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Stats = () => (
  <section className="stats-section">
    <div className="container">
      <div className="stats-grid">
        <StatItem icon={Users} target={5000} suffix="+" label="Happy Customers" />
        <StatItem icon={Award} target={8} suffix="+" label="Years Experience" />
        <StatItem icon={Wrench} target={50} suffix="+" label="Expert Technicians" />
        <StatItem icon={Star} target={4.79} suffix="★" label="Google Rating" />
      </div>
    </div>
  </section>
);

export default Stats;
