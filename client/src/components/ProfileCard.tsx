import { FaGithub, FaInstagram, FaJs, FaPython, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiTypescript, SiCplusplus, SiSolidity } from "react-icons/si";
import { useState, useRef, useEffect } from "react";
import { MdOutlineSwapVert } from "react-icons/md";

// Tech item component for profile card
const TechBadge = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div
    className="flex items-center px-2 py-1 mr-2 mb-2 border border-accent/40 whitespace-nowrap rounded-md bg-accent/5 hover:bg-accent/10 transition-colors"
    style={{ borderColor: "var(--border-accent-color, rgba(0, 117, 79, 0.4))" }}
  >
    <span className="mr-1 text-sm text-[currentColor]">{icon}</span>
    <span className="text-[10px] font-mono text-secondary">{name}</span>
  </div>
);

export default function ProfileCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Images to cycle through
  const profileImages = [
    "/images/profileimage.jpg",
    "/images/profile-old.jpg"
  ];
  
  // Preload images and debug component mount
  useEffect(() => {
    console.log("ProfileCard mounted. Preloading images...");
    // Preload images
    profileImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  // Toggle between images when the button is clicked
  const toggleImage = () => {
    console.log("Toggle image clicked! Current index:", currentImageIndex);
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? 1 : 0;
      console.log("Changing to index:", newIndex);
      return newIndex;
    });
  };
  
  const languages = [
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    { icon: <FaPython className="text-yellow-500" />, name: "Python" },
    { icon: <SiCplusplus className="text-blue-600" />, name: "C++" },
    { icon: <SiSolidity className="text-gray-400" />, name: "Solidity" },
  ];

  return (
    <div
      className="bg-cardBg p-0 h-full flex flex-col border border-accent/20 overflow-hidden card-rounded"
      style={{
        borderColor: "var(--border-accent-color, rgba(0, 117, 79, 0.25))",
      }}
    >
      {/* Profile image takes up the entire top part */}
      <div className="w-full h-60 overflow-hidden relative">
        <img
          src={profileImages[currentImageIndex]}
          alt="Noah Ojile"
          className="w-full h-full object-cover transition-all duration-200"
          key={currentImageIndex} // Key forces re-render of image when changed
        />
        <button 
          className="absolute bottom-2 left-2 bg-accent/70 dark:bg-accent/70 hover:bg-accent/90 text-black dark:text-white py-1 px-2 rounded-md flex items-center gap-1 border border-black/30 dark:border-white/30 text-xs transition-all duration-300 hover:scale-105 hover:border-black/50 dark:hover:border-white/50 swap-button-glow"
          onClick={toggleImage}
          aria-label="Toggle profile image"
          style={{
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)"
          }}
        >
          <MdOutlineSwapVert size={14} className="animate-pulse" />
          <span className="font-mono font-semibold">swap</span>
        </button>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        {/* Name and status */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-sequel mb-0">Noah Ojile</h1>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-neonGreen rounded-full mr-2 animate-pulse"></span>
            <span className="text-xs font-mono text-neonGreen">ACTIVE</span>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-xs mb-4 font-mono border-l-2 pl-2"
          style={{
            borderColor: "var(--border-accent-color, rgba(0, 117, 79, 0.4))",
          }}
        >
          I build full-stack apps and MVPs using React, Vite and Next.js—with
          backend systems, AI automation, and smart contracts.
        </p>

        {/* Language badges */}
        <div className="flex flex-wrap mb-4">
          {languages.map((lang, index) => (
            <TechBadge
              key={`lang-${index}`}
              icon={lang.icon}
              name={lang.name}
            />
          ))}
        </div>

        {/* Social links */}
        <div
          className="flex space-x-4 text-secondary border-t pt-4 mt-auto"
          style={{
            borderColor: "var(--border-accent-color, rgba(0, 117, 79, 0.25))",
          }}
        >
          <a
            href="https://github.com/ojilenoah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neonGreen transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/0xno4h/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neonGreen transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/oxno4h"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neonGreen transition-colors"
            aria-label="X (Twitter)"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
