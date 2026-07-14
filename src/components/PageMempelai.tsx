import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { weddingConfig } from "../weddingConfig";

const InstagramIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

const PersonCard: React.FC<{
  role: string;
  photo: string;
  name: string;
  desc: string;
  igUrl?: string;
}> = ({ role, photo, name, desc, igUrl }) => (
  <div
    className="reveal flex flex-col items-center text-center p-5 rounded-[20px] w-full"
    style={{
      backgroundColor: "rgba(143,168,150,0.88)",
      border: "3px solid #E8C4C4",
    }}>
    <p
      className="text-[#2D5A4D] text-[14px] font-semibold mb-3"
      style={{ fontFamily: "Philosopher, sans-serif" }}>
      {role}
    </p>
    {/* Photo with oval clip */}
    <div
      className="w-[130px] h-[165px] overflow-hidden mb-3"
      style={{ borderRadius: "50% 50% 48% 48% / 42% 42% 38% 38%" }}>
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover object-top"
      />
    </div>
    <h2
      className="text-[#2D5A4D] text-[18px] md:text-[24px] font-semibold mb-1"
      style={{ fontFamily: "Philosopher, sans-serif" }}>
      {name}
    </h2>
    <p
      className="text-white text-[10px] md:text-[12px] mb-3 leading-relaxed"
      style={{ fontFamily: "Poppins, sans-serif" }}
      dangerouslySetInnerHTML={{ __html: desc }}
    />
    {igUrl && (
      <a
        href={igUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
        style={{ backgroundColor: "#E8C4C4", color: "#2D5A4D" }}>
        <InstagramIcon />
      </a>
    )}
  </div>
);

export const PageMempelai: React.FC = () => {
  const sectionRef = useScrollReveal();
  const { quote, quoteReference, groom, bride } = weddingConfig.mempelai;

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative w-full flex flex-col items-center overflow-hidden">
      {/* ---- Quote Section ---- */}
      <div
        className="w-full flex flex-col items-center px-6 py-10"
        style={{
          backgroundColor: "#8FA896",
        }}>
        <p
          className="reveal text-white text-[13px] leading-relaxed text-center italic mb-3 px-2"
          style={{ fontFamily: "Lora, serif" }}>
          "{quote}"
        </p>
        <p
          className="reveal text-[#FFFFF0] text-[15px]"
          style={{ fontFamily: "Lora, serif" }}>
          {quoteReference}
        </p>
      </div>

      {/* ---- Mempelai Cards Section ---- */}
      <div
        className="w-full flex flex-col items-center pb-12 pt-6 px-5 gap-6"
        style={{
          backgroundColor: "#FFFFF0",
        }}>
        <PersonCard
          role="Pengantin Pria"
          photo={groom.photo}
          name={groom.name}
          desc={groom.description}
          igUrl={groom.instagram}
        />

        <div
          className="reveal text-[#2D5A4D] text-[28px] font-bold"
          style={{ fontFamily: "Philosopher, serif" }}>
          &amp;
        </div>

        <PersonCard
          role="Pengantin Wanita"
          photo={bride.photo}
          name={bride.name}
          desc={bride.description}
          igUrl={bride.instagram}
        />
      </div>
    </section>
  );
};
