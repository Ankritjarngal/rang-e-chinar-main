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
      className="fixed w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-lg"
      style={{ 
        zIndex: 9999,
        top: "80px",  // Adjust based on your header height
        right: "8%",  // Position near the Resources button
      }}
    >
      <Link
        to="/public/gereral brochure_250404_234757.pdf"
        target="_blank"
        className="block px-4 py-3 text-sm text-white hover:bg-white/20 transition-all duration-200 first:rounded-t-md"
      >
        Brochure
      </Link>
      <Link
        to="/"
        target="_blank"
        className="block px-4 py-3 text-sm text-white hover:bg-white/20 transition-all duration-200"
      >
        Guidelines
      </Link>
      <Link
        to=""
        target="_blank"
        className="block px-4 py-3 text-sm text-white hover:bg-white/20 transition-all duration-200"
      >
        Time Table
      </Link>
      <Link
      to="public/Scan20250321101700_organized (1).pdf"
        target="_blank"
        className="block px-4 py-3 text-sm text-white hover:bg-white/20 transition-all duration-200 last:rounded-b-md"
      >
        Coordinator List
      </Link>
    </div>
  );
};

export default ResourceDropdownMenu;