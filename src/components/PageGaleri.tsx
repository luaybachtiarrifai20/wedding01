import React from "react";
import { weddingConfig } from "../weddingConfig";

export const PageGaleri: React.FC = () => {
  const { photos } = weddingConfig.galeri;
  return (
    <section
      className="relative w-full flex flex-col items-center overflow-hidden py-12 px-5"
      style={{
        backgroundColor: "rgba(253,245,230,0.85)",
      }}
    >
      <div className="w-full flex flex-col items-center gap-5">
        <h2
          className="text-[#2D5A4D] text-[36px] font-normal"
          style={{ fontFamily: "Philosopher, sans-serif" }}
        >
          Our Moments
        </h2>

        {/* Gallery Grid */}
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="col-span-2 rounded-[14px] overflow-hidden">
            <img src={photos[0]} alt="Gallery 1" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[14px] overflow-hidden">
            <img src={photos[1]} alt="Gallery 2" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[14px] overflow-hidden">
            <img src={photos[2]} alt="Gallery 3" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[14px] overflow-hidden">
            <img src={photos[3]} alt="Gallery 4" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[14px] overflow-hidden">
            <img src={photos[0]} alt="Gallery 5" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};
