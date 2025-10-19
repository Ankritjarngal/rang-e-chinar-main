// src/pages/Events/components/CategoryCard.jsx

import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

const CategoryCard = ({ img, title, url, index }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      anchorPlacement: "top-center",
      disable: "phone", // Corrected value
      startEvent: "DOMContentLoaded",
      easing: "ease-out",
      mirror: true,
    });
    // Refresh AOS animations - useful if data loads async or changes
    Aos.refresh();
  }, []); // Run AOS init only once on mount

  return (
    // Added data-aos-once="false" if you want animation on scroll up too
    <div data-aos="fade-down" data-aos-delay={index * 100} data-aos-once="false" className="mb-5 CardShadow max-w-sm w-full"> {/* Added max-width and full width */}
      {/* Added object-cover and aspect-ratio for better image handling */}
      <img
        className="h-auto w-full object-cover aspect-[3/4]" // Adjust aspect ratio as needed
        src={img}
        alt={title + " image"}
        onError={(e) => { e.target.onerror = null; e.target.src="/common/placeholder.png"}} // Basic fallback
       />
      <div className="p-4 bg-background">
        <p className="text-3xl text-primary font-semibold font-heading overflow-visible truncate"> {/* Added truncate */}
          {title}
        </p>
        {/* Link already points to the correct list page URL passed in props */}
        <Link to={url}>
          <button
            className="px-4 mt-4 md:px-6 py-2 font-body ShadowBlur text-sm md:text-base rounded-md font-medium text-background bg-primary border border-accent hover:opacity-90 transition-opacity focus:outline-none text-center"
           >
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CategoryCard;