import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { weddingConfig } from "../weddingConfig";

export const PageQuote: React.FC = () => {
  const sectionRef = useScrollReveal();
  const { quote, quoteReference } = weddingConfig.mempelai;

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full flex flex-col items-center overflow-hidden py-16 px-5">
      <div className="w-full flex flex-col items-center px-6 py-10">
        <div
          className="flex flex-col items-center text-center px-8 py-6 rounded-[15px]"
          style={{ backgroundColor: "rgba(255,255,240,0.85)" }}>
          <p
            className="reveal text-[#2D5A4D] text-[13px] leading-relaxed text-center italic mb-3 px-2"
            style={{ fontFamily: "Lora, serif" }}>
            "{quote}"
          </p>
          <p
            className="reveal text-[#2D5A4D] text-[15px]"
            style={{ fontFamily: "Lora, serif" }}>
            {quoteReference}
          </p>
        </div>
      </div>
    </section>
  );
};
