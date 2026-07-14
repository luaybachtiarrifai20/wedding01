import React from "react";
import { weddingConfig } from "../weddingConfig";
import { useWedding } from "../context/WeddingContext";
import awalanImage from "../../images/border1.png";

interface FrontProps {
  onOpen: () => void;
}

export const Front: React.FC<FrontProps> = ({ onOpen }) => {
  const { guestName } = useWedding();

  return (
    <div
      className="relative w-full h-[100dvh] flex flex-col items-center justify-center font-sans overflow-hidden"
      style={{ backgroundColor: "#FFFFF0" }}
    >
      {/* Border/Background using awalan.png */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${awalanImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content wrapper to center things properly */}
      <div className="w-[70%] max-w-[400px] flex flex-col items-center mt-12 relative z-10">
        {/* The Card containing ONLY the couple's photo */}
        <div
          className="relative w-[80%] rounded-[20px] overflow-hidden shadow-lg border-[2px] border-[#8FA896] mb-8"
          style={{ height: "45vh", minHeight: "250px", maxHeight: "200px" }}
        >
          {/* Photo Background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${weddingConfig.front.photo})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          ></div>

          {/* Gradient Overlay to fade the bottom of the photo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(143,168,150,0.02) 39%, #8FA896 100%)",
            }}
          ></div>
        </div>

        {/* Text Section (Outside the card) */}
        <div className="flex flex-col items-center text-center w-full relative z-10">
          <h2 className="font-['Poppins'] text-[13px] tracking-[3px] text-black uppercase mb-2">
            The Wedding Of
          </h2>

          <h1
            className="text-[33px] text-[#2D5A4D] mb-6 font-normal drop-shadow-md"
            style={{ fontFamily: '"Philosopher", sans-serif' }}
          >
            {weddingConfig.couple.names}
          </h1>

          <div className="flex flex-col items-center gap-1 mb-8">
            <p className="font-['Poppins'] text-[13px] text-black">
              Kepada Yth :
            </p>
            <p className="font-['Poppins'] text-[17px] text-[#2D5A4D]">
              {guestName}
            </p>
          </div>

          <button
            onClick={onOpen}
            className="flex items-center gap-2 font-['Poppins'] text-[12px] font-medium text-white px-[20px] py-[11px] rounded-[27px] hover:opacity-90 transition-opacity"
            style={{
              backgroundImage: "linear-gradient(180deg, #E8C4C4 0%, #D4A5A5 100%)",
            }}
          >
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
};
