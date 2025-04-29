import { FaFileDownload } from "react-icons/fa";
import { useState } from "react";

export default function DownloadCVButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    // To prevent caching issues, add a cache-busting timestamp
    const timestamp = new Date().getTime();
    setIsDownloading(true);

    try {
      // Simplify for Vercel deployment - this approach works with your vercel.json configuration
      // The updated route configuration will handle the PDF properly
      window.location.href = `/Noah_Ojile_CV.pdf?t=${timestamp}`;
      
      // Reset the downloading state after a short delay
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    } catch (error) {
      console.error("Download failed:", error);
      setIsDownloading(false);
      
      // Fallback method if direct navigation fails
      const link = document.createElement('a');
      link.href = `/Noah_Ojile_CV.pdf?t=${timestamp}`;
      link.download = 'Noah_Ojile_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button 
      onClick={handleDownload}
      disabled={isDownloading}
      className={`bg-blue-600/90 hover:bg-blue-700 text-white flex items-center justify-center py-3 w-full transition-all duration-300 rounded-md shadow-sm hover:shadow-md ${isDownloading ? 'opacity-75 cursor-wait' : ''}`}
    >
      <FaFileDownload className={`mr-2 ${isDownloading ? 'animate-pulse' : ''}`} />
      <span className="font-bold tracking-wide">
        {isDownloading ? 'DOWNLOADING...' : 'DOWNLOAD CV'}
      </span>
    </button>
  );
}