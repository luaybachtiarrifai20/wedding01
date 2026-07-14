import React from "react";
import theWeddingImage from "../../images/awal.png";
import { weddingConfig } from "../weddingConfig";

export const PageCouple: React.FC = () => {
  const { names, date } = weddingConfig.couple;
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 px-6"
      style={{
        backgroundImage: `url(${theWeddingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FFFFF0",
      }}
    >
      {/* Text overlay */}
      <div className="relative z-10 flex flex-col items-center text-center animate-fadeInUp">
        <p
          className="text-[#2D5A4D] text-[11px] tracking-[3px] uppercase mb-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          The Wedding Of
        </p>
        <h1
          className="text-[#6B8E7B] text-[40px] font-normal mb-3"
          style={{ fontFamily: "Philosopher, sans-serif" }}
        >
          {names}
        </h1>
        <p
          className="text-[#2D5A4D] text-[12px] uppercase tracking-widest"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {date}
        </p>
      </div>
    </section>
  );
};
