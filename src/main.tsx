import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { WeddingProvider } from './context/WeddingContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/*
         * Route utama: /:slug
         * Setiap client punya slug unik, misal:
         *   /indra-july        → undangan Indra & July
         *   /andi-sari         → undangan Andi & Sari
         *   /indra-july?to=budi → undangan ke tamu "Budi"
         */}
        <Route
          path="/:slug"
          element={
            <WeddingProvider>
              <App />
            </WeddingProvider>
          }
        />

        {/*
         * Redirect root "/" ke slug demo untuk development.
         * Ganti "demo" dengan slug default jika diperlukan.
         */}
        <Route path="/" element={<Navigate to="/indra-july" replace />} />

        {/* Catch-all: redirect ke demo */}
        <Route path="*" element={<Navigate to="/indra-july" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
