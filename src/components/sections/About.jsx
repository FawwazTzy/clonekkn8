import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapPin, FaGraduationCap, FaRocket, FaCode } from 'react-icons/fa6';
import SectionHeader from '../layout/SectionHeader';
import Card from '../ui/Card';
import Timeline from '../ui/Timeline';
import './About.css';

const stats = [
  { label: 'KKN Members', value: '10', icon: <FaGraduationCap /> },
  { label: 'Work Programs', value: '8+', icon: <FaRocket /> },
  { label: 'Community Activities', value: '15+', icon: <FaCode /> },
];

export default function About() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
  const liveTime = formatter.format(time);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeader
          number="08"
          title="About Us"
          subtitle="Empowering education, strengthening communities, and creating meaningful impact through collaboration."
        />

        <div className="about-content">
          {/* Bio */}
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-intro">
              We are <strong>KKN Group 8</strong> from Universitas Muhammadiyah Metro, assigned to
              <strong> SMPN 8 Tulang Bawang</strong>. Through this Community Service Program (KKN),
              we are committed to contributing to education, creativity, and community empowerment
              while building meaningful relationships with students, teachers, and the local community.
            </p>
            <p>
              Our activities focus on educational innovation, digital literacy, environmental awareness,
              social engagement, and collaborative programs designed to support the school's development
              and inspire students to reach their full potential.
            </p>
            <p>
              Throughout the program, we aim to create sustainable initiatives that leave positive impacts
              on the school community while strengthening teamwork, leadership, and social responsibility.
            </p>

            <div className="about-learning">
              <span className="about-learning-label mono">Our Focus</span>
              <div className="about-learning-tags">
                <span className="about-tag">Teaching</span>
                <span className="about-tag">Innovation</span>
                <span className="about-tag">Collaboration</span>
              </div>
            </div>
          </motion.div>

          {/* Info Cards */}
          <div className="about-cards">
            {/* Location Card */}
            <Card delay={0.1} glow>
              <div className="about-card-content">
                <FaMapPin className="about-card-icon" />
                <div>
                  <h4>SMPN 8 Tulang Bawang</h4>
                  <p className="about-card-sub mono" style={{ marginTop: '4px', color: 'var(--accent)' }}>
                    {liveTime}
                  </p>
                </div>
              </div>
            </Card>

            {/* Status Card */}
            <Card delay={0.2} glow>
              <div className="about-card-content">
                <div className="about-status-dot" />
                <div>
                  <h4 className="gradient-text">Community Service Program</h4>
                  <p className="about-card-sub">Education · Collaboration · Empowerment</p>
                </div>
              </div>
            </Card>

            {/* Stats */}
            <div className="about-stats">
              {stats.map((stat, i) => (
                <Card key={stat.label} delay={0.3 + i * 0.1} className="about-stat-card">
                  <div className="about-stat-icon">{stat.icon}</div>
                  <div className="about-stat-value mono">{stat.value}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="about-timeline-section">
          <h4 className="mono timeline-section-label" style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--accent)', opacity: 0.8 }}>KKN TIMELINE</h4>
          <Timeline />
        </div>
      </div>
    </section>
  );
}
