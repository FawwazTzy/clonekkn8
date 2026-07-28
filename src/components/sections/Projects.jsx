import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  FaArrowUpRightFromSquare,
  FaXmark,
  FaLayerGroup,
  FaCode
} from 'react-icons/fa6';

import Tilt from 'react-parallax-tilt';
import SectionHeader from '../layout/SectionHeader';
import { StatusBadge } from '../ui/Badge';
import { projects, projectCategories, statusConfig } from '../../data/projects';
import { useTheme } from '../../context/ThemeContext';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme } = useTheme();

  const handleLinkClick = (e, status, url) => {
    e.stopPropagation(); // Don't trigger modal click
    if (status === 'in-progress') {
      e.preventDefault();
      alert('Currently In Progress');
    } else if (status === 'planned') {
      e.preventDefault();
      alert('Available Soon');
    } else if (!url) {
      e.preventDefault();
      alert('Link not available for this project');
    }
  };

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeader
          number="08"
          title="Anggota KKN 8"
          subtitle="Anggota-anggota yang pekerja keras dan rajin!"
        />

        {/* Filter Tabs */}
        <div className="projects-filters">
          {projectCategories.map((cat) => (
            <motion.button
              key={cat.id}
              className={`projects-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.label}
              {activeFilter === cat.id && (
                <motion.div
                  className="filter-indicator"
                  layoutId="filter-indicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Tilt
                  className="project-card-tilt"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.02}
                  transitionSpeed={1500}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor={theme === 'dark' || theme === 'cyber' ? '#ffffff' : 'var(--accent)'}
                  glarePosition="all"
                  glareBorderRadius="20px"
                >
                  <div className="project-card">
                    {/* Thumbnail */}
                    <div className="project-thumbnail">
                      {project.thumbnail ? (
                        <>
                          <img 
                            src={project.thumbnail} 
                            alt={`${project.title} default`}
                            className="project-thumbnail-img primary"
                            loading="lazy"
                          />
                          {project.thumbnailHover && (
                            <img 
                              src={project.thumbnailHover} 
                              alt={`${project.title} hover`}
                              className="project-thumbnail-img hover"
                              loading="lazy"
                            />
                          )}
                        </>
                      ) : (
                        <div className="project-thumbnail-placeholder">
                          <span className="project-thumbnail-icon">
                            {project.category === 'ui-clone' ? '🎨' :
                             project.category === 'frontend' ? '⚛️' :
                             project.category === 'backend' ? '⚙️' : '🚀'}
                          </span>
                          <span className="project-thumbnail-text mono">{project.title}</span>
                        </div>
                      )}
                      <StatusBadge status={project.status} config={statusConfig[project.status]} />
                      <span className="project-category-badge">{
                        project.category === 'ui-clone' ? 'UI Clone' :
                        project.category === 'frontend' ? 'Frontend' :
                        project.category === 'backend' ? 'Backend' : 'Full Stack'
                      }</span>
                    </div>

                    {/* Content */}
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.description}</p>

                      {/* Tech Tags */}
                      <div className="project-tags">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="project-tag mono">{tech}</span>
                        ))}
                        {project.techStack.length > 3 && <span className="project-tag mono">+{project.techStack.length - 3}</span>}
                      </div>

                      {/* Quick Links */}
                      <div className="project-links">
                        <button
                          className="project-link project-link-primary"
                          title="View Details"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                        >
                          <FaArrowUpRightFromSquare />
                        </button>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal-content"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <FaXmark />
              </button>

              <div className="project-modal-inner">
                {/* Visual Header */}
                <div className="project-modal-header">
                  <div className="project-modal-hero">
                    <span className="project-modal-icon">
                      {selectedProject.category === 'ui-clone' ? '🎨' :
                       selectedProject.category === 'frontend' ? '⚛️' :
                       selectedProject.category === 'backend' ? '⚙️' : '🎓'}
                    </span>
                    <div className="project-modal-title-group">
                      <h2 className="project-modal-title">{selectedProject.title}</h2>
                      <div className="project-modal-meta">
                        <StatusBadge status={selectedProject.status} config={statusConfig[selectedProject.status]} />
                        <span className="project-modal-category mono">
                          {selectedProject.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Grid */}
                <div className="project-modal-body">
                  <div className="project-modal-body">
                    <div className="member-profile">
                      {/* FOTO */}
                      <div className="member-photo">
                        <img
                          src={selectedProject.thumbnail}
                          alt={selectedProject.title}
                        />
                      </div>
                      {/* BIODATA */}
                      <div className="member-info">
                        <h2>{selectedProject.fullName}</h2>
                        <span className="member-role">
                          {selectedProject.role}
                        </span>
                        <div className="member-detail">
                          <strong>TTL</strong>
                          <span>{selectedProject.ttl}</span>
                        </div>
                        <div className="member-detail">
                          <strong>Alamat</strong>
                          <span>{selectedProject.address}</span>
                        </div>
                        <div className="member-detail">
                          <strong>Program Studi</strong>
                          <span>{selectedProject.major}</span>
                        </div>
                        <div className="member-detail">
                          <strong>Fakultas</strong>
                          <span>{selectedProject.faculty}</span>
                        </div>
                        <div className="member-detail">
                          <strong>Hobi</strong>
                          <span>{selectedProject.hobby}</span>
                        </div>
                        <div className="member-detail">
                          <strong>Email</strong>
                          <span>{selectedProject.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="member-about">
                      <h3>Tentang Saya</h3>
                      <p>{selectedProject.about}</p>
                    </div>
                    <div className="member-skills">
                      <h3>Keahlian</h3>
                      <div className="project-modal-tech">
                        {selectedProject.skills?.map((skill) => (
                          <span
                            key={skill}
                            className="tech-chip"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
