import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../../../Components/Header";
function Hero() {
  const targetDate = new Date("2025-10-25T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "ROOTS AND RHYTHMS";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, anchorPlacement: "top-center", mirror: true });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden font-playfair">
      {/* Background gradient */}
      <div >
        <Header />
      </div>
       
      <div className="absolute inset-0 bg-gradient-to-br    z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-1 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-radial from-pink-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-green-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-12">
        {/* Compact Header */}
        <header>
          
        </header>
        
        <div className="pt-12 px-6 text-white text-center">
          {/* Date Display */}
          <div 
            data-aos="fade-down" 
            className="inline-block px-6 py-2 rounded-full bg-pink-900/40 backdrop-blur-sm border border-pink-300/30 text-lg md:text-xl font-cormorant text-white mb-8"
          >
            <span>25</span>
            <sup className="text-sm">th</sup>
            <span className="mx-2">-</span>
            <span>26</span>
            <sup className="text-sm">th</sup>
            <span className="ml-3">October 2025</span>
          </div>

          {/* Typewriter "ROOTS AND RHYTHMS" */}
          <div 
            data-aos="fade-up" 
            className="mb-3"
          >
            <p className="text-xl md:text-3xl font-cursive text-white px-6 py-2 border border-pink-300/40 inline-block bg-pink-900/20 backdrop-blur-sm rounded-lg">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          {/* Main Event Title - Reduced Size */}
          <div className="mb-6 flex justify-center items-center">
            <h1
              data-aos="zoom-in"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white tracking-wider"
              style={{ 
                letterSpacing: '0.05em', 
                lineHeight: '1.5',
                fontSize:"52px",
                textShadow: '3px 3px 0 rgba(17, 19, 17, 0.5), -1px -1px 0 rgba(25, 29, 25, 0.3)'
              }}
            >
              Rang-E-Chinar <span className="text-green-300">2.0</span>
            </h1>
          </div>

          {/* Decorative divider */}
          <div data-aos="fade" className="flex justify-center my-6">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>

          {/* "The Rhythm Begins In" */}
          <div 
            data-aos="fade-up" 
            className="mb-8"
          >
            <p className="text-xl md:text-2xl font-serif text-green-100 px-6 py-2 border-b border-pink-200/30 inline-block">
              The Rhythm Begins In...
            </p>
          </div>

          {/* Countdown Timer - Enhanced Design */}
          <div className="mb-8 flex justify-center">
            <div className="flex gap-3 md:gap-4 justify-center flex-wrap max-w-2xl">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <div 
                  key={unit} 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100} 
                  className="relative group"
                >
                  <div className="px-5 py-4 bg-gradient-to-br from-green-800/60 to-green-900/60 backdrop-blur-md rounded-xl border border-green-400/40 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl md:text-4xl font-bold text-white font-mono tabular-nums">
                      {value}
                    </div>
                    <div className="text-xs md:text-sm text-green-200/90 font-sans uppercase tracking-widest mt-1">
                      {unit}
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-pink-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons on one line - closer to title */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="px-6 py-3 rounded-full text-base md:text-lg font-medium bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border border-green-300/30 hover:border-green-300/60 hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300 font-sans tracking-wider"
              onClick={() => window.open("https://rangechinar-registration-from.vercel.app", "_blank")}
            >
              REGISTER NOW
            </button>

            <button 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="px-6 py-3 rounded-full text-base md:text-lg font-medium bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 border border-pink-300/30 hover:border-pink-300/60 hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300 font-sans tracking-wider"
              onClick={() => window.open("/mapss.pdf", "_blank")}
            >
              VIEW MAP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;