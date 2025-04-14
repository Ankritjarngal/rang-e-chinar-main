import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const ResourceDropdownMenu = ({ isDropdownOpen, setIsDropdownOpen }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  if (!isDropdownOpen) {
    return null;
  }

  return (
    <div 
      ref={dropdownRef}
      className="fixed w-48 bg-black/80 backdrop-blur-md border border-white/20 rounded-md shadow-lg"
      style={{ 
        zIndex: 9999,
        top: "85px",  // Adjust based on your header height
        right: "8%",  // Position near the Resources button
      }}
    >
      <Link
      to="brochure.pdf"
        target="_blank"
        className="block px-4 py-3 text-sm text-white hover:bg-white/20 transition-all duration-200 first:rounded-t-md"
      >
        Brochure
      </Link>
      {/* <Link
        to="/"
        target="_blank"
        className="block px-4 py-3 text-sm text-white hover:bg-white/20 transition-all duration-200"
      >
        Guidelines
      </Link>
      <Link
        to="/"
        target="_blank"
        className="block px-4 py-3 text-sm text-white hover:bg-white/20 transition-all duration-200"
      >
        Time Table
      </Link> */}
      <Link
      to="https://drive.google.com/file/d/1nmZIT78sw1fDVUAYR0ki54arHs-6ecvT/view?usp=sharing"
        target="_blank"
        className="block px-4 py-3 text-sm text-white hover:bg-white/20 transition-all duration-200 last:rounded-b-md"
      >
        Coordinator List
      </Link>
    </div>
  );
};

export default ResourceDropdownMenu;