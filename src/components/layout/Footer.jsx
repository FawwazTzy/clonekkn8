import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';
import Logo from '../ui/Logo';
import Magnetic from '../ui/Magnetic';
import { socialLinks } from '../../data/socialLinks';
import './Footer.css';

export default function Footer() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* Left */}
          <div className="footer-left">
            <div className="footer-logo">
              <Logo size={32} />

              <div className="footer-title-group">
                <span className="footer-name">
                  KKN Kelompok 8
                </span>

                <div className="footer-signature">
                  <svg
                    width="200"
                    height="60"
                    viewBox="0 0 200 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="
                        M20 60

                        L20 20
                        L20 15
                        L50 15
                        M20 35
                        L45 35

                        C50 35 50 20 58 22
                        C66 30 62 60 72 60

                        C82 60 78 20 88 22
                        C96 30 92 60 102 60

                        C112 60 108 20 118 22
                        C126 30 122 60 132 60

                        C142 60 138 20 148 22
                        C156 30 152 60 162 60

                        C172 60 168 20 178 22
                        C186 30 182 60 192 60

                        M182 60
                        L188 30
                        L194 60

                        M18 62
                        Q110 68 210 62

                        M178 62
                        Q192 55 208 63
                      "
                      stroke="var(--accent)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 2.5,
                        ease: 'easeInOut',
                      }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            <p className="footer-tagline">
              Universitas Muhammadiyah Metro
              <br />
              SMPN 8 Tulang Bawang
              <br />
              <span className="mono footer-time">
                {liveTime} WIB
              </span>
            </p>
          </div>

          {/* Social */}
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <Magnetic key={link.name} strength={0.4}>
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer-social-link ${link.label.toLowerCase()}`}
                  aria-label={link.name}
                  whileHover={{ y: -3 }}
                >
                  <link.icon />
                </motion.a>
              </Magnetic>
            ))}
          </div>

          {/* Right */}
          <div className="footer-right">
            <p className="footer-copy">
              © {new Date().getFullYear()} KKN Kelompok 8 Universitas Muhammadiyah Metro.
              <br />
              All Rights Reserved.
            </p>
          </div>

        </div>

        <motion.button
          className="footer-back-top"
          onClick={scrollToTop}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
}