import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ event, index }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      anchorPlacement: "top-center",
      disable: "Phone",
      startEvent: "DOMContentLoaded",
      easing: "ease-out",
      mirror: true,
    });
  }, []);

  // Very light shade of primary color
  const lightPrimaryBg = "bg-[#F6EDE5]"; // Light shade of D9823F (primary)

  return (
    <div
      className={`relative flex flex-col ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
        } items-center sm:space-x-6`}
    >
      {/* Image section with autumn frame */}
      <div
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay="250"
        className="w-full sm:max-w-sm relative autumn-image-container"
      >
        <div className="autumn-frame absolute inset-0 pointer-events-none"></div>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[460px] object-cover rounded-lg"
        />
        {/* Autumn decorative corner elements */}
        <div className="absolute top-0 left-0 autumn-corner-tl"></div>
        <div className="absolute top-0 right-0 autumn-corner-tr"></div>
        <div className="absolute bottom-0 left-0 autumn-corner-bl"></div>
        <div className="absolute bottom-0 right-0 autumn-corner-br"></div>
      </div>
      {/* Content section with autumn styling */}
      <div
        className={`w-full md:py-16 md:px-16 lg2:max-w-4xl relative ${index % 2 === 0 ? 'sm:-translate-x-40' : 'sm:translate-x-40'
          }`}
      >
        <div
          data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          className={`p-6  md:p-8 lg:p-10 ${lightPrimaryBg} h-full rounded-lg border-l border-t border-primary`}
        >
          <div className="text-2xl font-playfair sm:text-3xl font-semibold mb-4 text-primary  overflow-visible autumn-title">
            {event.title}
          </div>
          <p className="mb-6 md:mb-8 text-text text-lg font-quicksand">{event.description}</p>
          <Link
            to={event.link}
            className="px-3 md:px-6 py-3 autumn-button-glow font-quicksand text-sm md:text-base rounded-md font-medium text-white bg-primary hover:bg-secondary border border-accent transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <span className="autumn-leaf-icon"></span>
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;