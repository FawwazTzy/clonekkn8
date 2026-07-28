import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa6';
import './Timeline.css';
import senam from '../../assets/timeline/senam.jpeg';

const timelineData = [
  {
    year: '19 Juli 2026',
    title: 'Senam Minggu',
    category: 'Kemasyarakatan, Olahraga',
    image: senam,
    icon: <FaCode />,
    desc: 'Kegiatan senam bersama masyarakat untuk meningkatkan kesehatan dan mempererat hubungan antara mahasiswa KKN dengan warga.',
    link: '#',
  },
  {
    year: '2026',
    title: 'Coming Soon',
    category: 'Learning',
    image: 'senam',
    icon: <FaRocket />,
    desc: 'Coming soon...',
    link: '#',
  },
  {
    year: '2025',
    title: 'Coming Soon',
    category: 'Learning',
    image: 'senam',
    icon: <FaGraduationCap />,
    desc: 'Coming soon...',
    link: '#',
  },
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-line">
        <motion.div
          className="timeline-line-progress"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>

      <div className="timeline-items">
        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="timeline-dot">
              <div className="timeline-dot-inner">{item.icon}</div>
            </div>

            <div className="timeline-content card glass">
              <img
                src={item.image}
                alt={item.title}
                className="timeline-image"
              />
              <span className="timeline-year mono">{item.year}</span>
              <span className="timeline-category">
                {item.category}
              </span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.desc}</p>
              <button
                className="timeline-btn"
                onClick={() => window.location.href = item.link}
              >
                Selengkapnya →
              </button>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}