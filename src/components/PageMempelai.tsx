import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { weddingConfig } from "../weddingConfig";

const InstagramIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

export const PageMempelai: React.FC = () => {
  const sectionRef = useScrollReveal();
  const { groom, bride } = weddingConfig.mempelai;

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full flex flex-col items-center overflow-hidden py-12">
      {/* ---- Groom Section ---- */}
      <div className="reveal w-full flex flex-col items-center py-8 px-5 mb-4">
        <div
          className="w-[140px] h-[200px] overflow-hidden mb-4 border-4 border-[#E8C4C4]"
          style={{ borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
          <img
            src={groom.photo}
            alt={groom.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className="flex flex-col items-center text-center px-6 py-4 rounded-[15px]"
          style={{ backgroundColor: "rgba(255,255,240,0.85)" }}>
          <h2
            className="text-[#2D5A4D] text-[22px] font-semibold mb-2"
            style={{ fontFamily: "Philosopher, sans-serif" }}>
            {groom.name}
          </h2>
          <p
            className="text-[#2D5A4D] text-[11px] md:text-[15px] mb-3 leading-relaxed max-w-[280px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
            dangerouslySetInnerHTML={{ __html: groom.description }}
          />
          {groom.instagram && (
            <a
              href={groom.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: "#E8C4C4", color: "#2D5A4D" }}>
              <InstagramIcon />
            </a>
          )}
        </div>
      </div>

      {/* ---- Ampersand Section ---- */}
      <div className="reveal text-[#2D5A4D] text-[32px] font-bold mb-4" style={{ fontFamily: "Philosopher, serif" }}>
        &amp;
      </div>

      {/* ---- Bride Section ---- */}
      <div className="reveal w-full flex flex-col items-center py-8 px-5 pb-12">
        <div
          className="w-[140px] h-[200px] overflow-hidden mb-4 border-4 border-[#E8C4C4]"
          style={{ borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
          <img
            src={bride.photo}
            alt={bride.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className="flex flex-col items-center text-center px-6 py-4 rounded-[15px]"
          style={{ backgroundColor: "rgba(255,255,240,0.85)" }}>
          <h2
            className="text-[#2D5A4D] text-[22px] font-semibold mb-2"
            style={{ fontFamily: "Philosopher, sans-serif" }}>
            {bride.name}
          </h2>
          <p
            className="text-[#2D5A4D] text-[11px] md:text-[14px] mb-3 leading-relaxed max-w-[280px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
            dangerouslySetInnerHTML={{ __html: bride.description }}
          />
          {bride.instagram && (
            <a
              href={bride.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: "#E8C4C4", color: "#2D5A4D" }}>
              <InstagramIcon />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
