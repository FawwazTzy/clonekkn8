import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
// import TechStack from './components/sections/TechStack'; // Nanti bisa diganti jadi Program Kerja
import Projects from './components/sections/Projects';   // Nanti bisa dijadikan Dokumentasi
import Contact from './components/sections/Contact';
import Certificates from './components/sections/Certificates';
import Footer from './components/layout/Footer';

import './styles/themes.css';
import './styles/animations.css';
import './styles/responsive.css';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          <title>KKN Kelompok 8 | SMPN 8 Tulang Bawang</title>

          <meta
            name="description"
            content="Website resmi KKN Kelompok 8 Universitas Muhammadiyah Metro di SMPN 8 Tulang Bawang. Menampilkan profil kelompok, program kerja, dokumentasi kegiatan, serta informasi pengabdian kepada masyarakat."
          />

          <meta
            name="keywords"
            content="KKN Kelompok 8, Universitas Muhammadiyah Metro, SMPN 8 Tulang Bawang, KKN UM Metro, Program Kerja KKN, Pengabdian Masyarakat, Tulang Bawang, Lampung"
          />

          <meta
            name="author"
            content="KKN Kelompok 8 Universitas Muhammadiyah Metro"
          />

          <meta name="robots" content="index, follow" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="KKN Kelompok 8 | SMPN 8 Tulang Bawang"
          />
          <meta
            property="og:description"
            content="Website resmi KKN Kelompok 8 Universitas Muhammadiyah Metro di SMPN 8 Tulang Bawang."
          />

          {/* Ganti nanti dengan domain Netlify atau GitHub Pages kamu */}
          <meta property="og:url" content="https://namakkn.netlify.app/" />

          <meta
            property="og:site_name"
            content="KKN Kelompok 8 Universitas Muhammadiyah Metro"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="twitter:title"
            content="KKN Kelompok 8 | SMPN 8 Tulang Bawang"
          />

          <meta
            name="twitter:description"
            content="Website resmi KKN Kelompok 8 Universitas Muhammadiyah Metro."
          />

          {/* Canonical */}
          <link
            rel="canonical"
            href="https://namakkn.netlify.app/"
          />
        </Helmet>

        <ScrollProgress />

        <Navbar />

        <main>
          <Hero />
          <About />
          {/* <TechStack /> */}
          <Projects />
          <Certificates />
          <Contact />
        </main>

        <Footer />
      </ThemeProvider>
    </HelmetProvider>
  );
}