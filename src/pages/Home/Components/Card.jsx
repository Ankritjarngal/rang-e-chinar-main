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

  // Light spring color for background
  const lightSpringBg = "bg-[#EAF8F0]"; // Light pastel green
  const springButtonBg = "bg-green-600 hover:bg-green-700";
  const springBorder = "border-l-2 border-t-2 border-green-600";
  const springText = "text-green-600";

  return (
    <div
      className={`relative flex flex-col ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
        } items-center sm:space-x-6`}
    >
      {/* Image section with spring frame */}
      <div
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay="250"
        className="w-full sm:max-w-sm relative"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/spring/blossom-frame.png')",
            backgroundSize: "cover",
            opacity: 0.8,
            borderRadius: "8px",
          }}
        ></div>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[460px] object-cover rounded-lg"
        />
      </div>
      {/* Content section with spring styling */}
      <div
        className={`w-full md:py-16 md:px-16 lg2:max-w-4xl relative ${index % 2 === 0 ? 'sm:-translate-x-40' : 'sm:translate-x-40'
          }`}
      >
        <div
          data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          className={`p-6 md:p-8 lg:p-10 ${lightSpringBg} h-full rounded-lg ${springBorder}`}
        >
          <div className={`text-2xl font-playfair sm:text-3xl font-semibold mb-4 ${springText}`}>
            {event.title}
          </div>
          <p className="mb-6 md:mb-8 text-text text-lg font-quicksand">{event.description}</p>
          <Link
            to={event.link}
            className={`px-3 md:px-6 py-3 ${springButtonBg} font-quicksand text-sm md:text-base rounded-md font-medium text-white transition-all duration-300 text-center flex items-center justify-center gap-2`}
          >
            🌸 EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
