import { useState } from 'react';
import { Front } from './components/Front';
import { PageCouple } from './components/PageCouple';
import { PageQuote } from './components/PageQuote';
import { PageMempelai } from './components/PageMempelai';
import { PageAcara } from './components/PageAcara';
import { PageGaleri } from './components/PageGaleri';
import { PageGift } from './components/PageGift';
import { PageUcapan } from './components/PageUcapan';
import { PagePenutup } from './components/PagePenutup';
import { MusicPlayer } from './components/MusicPlayer';
import bgImage from '../images/taman.png';
import bgMempelai from '../images/background_mempelai.png';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Scroll ke atas konten setelah animasi masuk
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex justify-center" style={{ backgroundColor: '#FDF5E6' }}>
      <div
        className="relative w-full max-w-[414px] shadow-2xl"
        style={{ backgroundColor: '#FFFFF0', minHeight: '100dvh' }}
      >
        <MusicPlayer />
        {!isOpen ? (
          /* ===== HALAMAN COVER ===== */
          <div className="w-full h-screen">
            <Front onOpen={handleOpen} />
          </div>
        ) : (
          /* ===== HALAMAN KONTEN (slide-in dari bawah) ===== */
          <div className="w-full animate-slideIn">
            <PageCouple />

            {/* ===== BACKGROUND untuk PageQuote dan PageMempelai ===== */}
            <div
              className="w-full"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: 'repeat',
                backgroundSize: '300px auto',
                backgroundPosition: 'top center',
              }}
            >
              <PageQuote />
            </div>

            {/* ===== BACKGROUND untuk PageMempelai ===== */}
            <div
              className="w-full"
              style={{
                backgroundImage: `url(${bgMempelai})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <PageMempelai />
            </div>

            {/* ===== BACKGROUND mulai dari PageAcara ke bawah ===== */}
            <div
              className="w-full"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: 'repeat',
                backgroundSize: '300px auto',
                backgroundPosition: 'top center',
              }}
            >
              <PageAcara />
              <PageGaleri />
              <PageGift />
              <PageUcapan />
              <PagePenutup />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
