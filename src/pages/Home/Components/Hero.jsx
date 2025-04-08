// import { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import Header from "../../../Components/Header";

// function Hero() {
//   const targetDate = new Date("2025-05-02T00:00:00");

//   const calculateTimeLeft = () => {
//     const difference = targetDate - new Date();
//     return {
//       days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
//       hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
//       minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
//       seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
//   const [videoError, setVideoError] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const [scrambledText, setScrambledText] = useState("Rang-E-Chinar 2.0");
//   const letters = "abcdefklmrstyz-016789";
//   const originalText = "Rang-E-Chinar 2.0";

//   const scrambleText = useCallback(() => {
//     let iteration = 0;
//     const interval = setInterval(() => {
//       setScrambledText(
//         originalText
//           .split("")
//           .map((_, index) => {
//             if (index < iteration) {
//               return originalText[index];
//             }
//             return letters[Math.floor(Math.random() * letters.length)];
//           })
//           .join("")
//       );
//       if (iteration >= originalText.length) clearInterval(interval);
//       iteration += 1 / 3;
//     }, 50);
//   }, []);

//   useEffect(() => {
//     scrambleText();
//     const intervalId = setInterval(scrambleText, 10000);
//     return () => clearInterval(intervalId);
//   }, [scrambleText]);

//   useEffect(() => {
//     Aos.init({ duration: 1000, anchorPlacement: "top-center", mirror: true });
//   }, []);

//   // Handle video error
//   const handleVideoError = () => {
//     console.error("Video failed to load");
//     setVideoError(true);
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden font-playfair">
//       {/* Background Video */}
//       {!videoError ? (
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0"
//           onError={handleVideoError}
//         >
//           {/* Fixed path - remove "public" from beginning, as it's implied in React's public folder structure */}
//           <source src="/common/heroovideo090.mp4" type="video/mp4" />
//           {/* Using the same file for both formats since you're using the same file name */}
//           <source src="/common/heroovideo090.mp4" type="video/webm" />
//         </video>
//       ) : (
//         <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900 to-black"></div>
//       )}
      
//       {/* Dark overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black/40 z-5"></div>
      
//       <div className="relative z-10">
//         <Header />
//         <div className="pt-4 md:pt-32 p-7 md:p-32 text-white text-center">
//           <div data-aos="fade-down" className="text-xl ss:text-2xl md:text-4xl font-quicksand text-white overflow-hidden">
//             2<sup className="text-xl md:text-2xl">nd</sup> & 3<sup className="text-xl md:text-2xl">rd</sup> May 2025
//           </div>

//           <div className="mt-8 mb-12 flex justify-center items-center w-full overflow-hidden">
//             <h1 
//               className="mb-10 text-4xl ss:text-8xl sm:text-9xl md:text-9xl font-bold font-inter text-white tracking-wider overflow-visible"
//               style={{ letterSpacing: '0.05em', maxWidth: '100%', lineHeight: '1.1' }}
//             >
//               {scrambledText}
//             </h1>
//           </div>

//           {/* Improved "The Rhythm Begins In" section */}
//           <div 
//             data-aos="fade-up" 
//             className="my-12 md:my-16 w-full flex justify-center"
//           >
//             <p className="text-2xl ss:text-2xl md:text-5xl lg:text-6xl font-semibold text-white font-quicksand px-3 py-2 border-white/30">
//               The Rhythm Begins In...
//             </p>
//           </div>

//           <div className="mt-10 md:mt-16 flex justify-center">
//             <div className="w-full min-w-150 px-12 lg:px-40 flex flex-wrap gap-8 justify-between font-bold font-quicksand">
//               {Object.entries(timeLeft).map(([unit, value], index) => (
//                 <div 
//                   key={unit} 
//                   data-aos="fade-down" 
//                   data-aos-delay={index * 100} 
//                   className="text-center"
//                 >
//                   <div className="block text-6xl md:text-9xl font-semibold text-white font-playfair pb-3 md:pb-6">
//                     {value}
//                   </div>
//                   <div className="block text-lg md:text-3xl text-white/80 font-quicksand uppercase">
//                     {unit}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Register Button Section Commented Out */}
//           <div><button style={
//             {background:"black",
//             color:"white",
//             border:"2px solid white",
//             padding:"10px",
//             marginTop:"20px"
//           }}>REGISTRATIONS WILL BE LIVE SOON </button></div>
//           {/*
//           <div className="mt-10 py-4 flex justify-center opacity-90">
//             <Link 
//               data-aos="fade-in" 
//               data-aos-delay="500" 
//               to="/register" 
//               className="px-6 md:px-8 py-4 rounded-full text-md md:text-xl font-semibold bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 border-2 border-green-300 hover:border-green-400 hover:shadow-md hover:shadow-green-300/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 font-quicksand group"
//             >
//             </Link>
//           </div>
//           */}

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../../../Components/Header";

function Hero() {
  const targetDate = new Date("2025-05-02T00:00:00");

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
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Enhanced character set for scrambled text effect
  const [scrambledText, setScrambledText] = useState("Chinar Blooms");
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const originalText = "Chinar Blooms";

  const scrambleText = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledText(
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );
      if (iteration >= originalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 50);
  }, []);

  useEffect(() => {
    scrambleText();
    const intervalId = setInterval(scrambleText, 8000);
    return () => clearInterval(intervalId);
  }, [scrambleText]);

  useEffect(() => {
    Aos.init({ duration: 1200, anchorPlacement: "top-center", mirror: true, once: false });
  }, []);

  // Handle video error
  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-playfair bg-gradient-to-b from-yellow-700 to-green-800">
      {/* Background Video */}
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
          onError={handleVideoError}
        >
          <source src="/common/heroovideo090.mp4" type="video/mp4" />
          <source src="/common/heroovideo090.mp4" type="video/webm" />
        </video>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-yellow-900 to-green-900"></div>
      )}
      
      {/* Pink/Purple Overlay for better text visibility and theme consistency */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-black-900/50 z-1"></div>
      
      {/* Cherry Blossom Decorative Element - Top Right */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-40 z-2">
        <div className="w-full h-full bg-[url('/common/cherry-blossom.png')] bg-contain bg-no-repeat"></div>
      </div>
      
      {/* Cherry Blossom Decorative Element - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-40 z-2">
        <div className="w-full h-full bg-[url('/common/cherry-blossom.png')] bg-contain bg-no-repeat transform rotate-180"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <div className="pt-6 md:pt-20 p-6 md:p-16 text-white text-center">
          {/* Elegant Date Display */}
          <div 
            data-aos="fade-down" 
            className="inline-block px-8 py-3 rounded-full bg-pink-900/30 backdrop-blur-sm border border-pink-300/30 text-xl ss:text-2xl md:text-3xl font-cormorant text-white shadow-lg shadow-pink-900/20"
          >
            <span className="font-light">2</span>
            <sup className="text-sm md:text-lg">nd</sup>
            <span className="mx-2 font-light">&</span>
            <span className="font-light">3</span>
            <sup className="text-sm md:text-lg">rd</sup>
            <span className="ml-3 font-light">May 2025</span>
          </div>

          {/* Main Event Title */}
          <div className="mt-12 mb-8 flex flex-col items-center justify-center w-full overflow-hidden">
            {/* <div data-aos="zoom-in-up" data-aos-delay="200" className="mb-4 text-2xl md:text-4xl font-light font-cormorant text-pink-200">
              {scrambledText}
            </div> */}
            
            <h1 
              data-aos="zoom-in" 
              className="text-5xl ss:text-6xl sm:text-8xl md:text-9xl font-bold font-playfair text-white tracking-wide overflow-visible"
              style={{ 
                letterSpacing: '0.05em', 
                maxWidth: '100%', 
                lineHeight: '1.1',
                textShadow: '100px 100px 50px rgba(26, 97, 51, 0.5)'
              }}
            >
              Rang-E-Chinar <span className="text-green-300">2.0</span>
            </h1>
          </div>

          {/* Decorative Divider */}
          <div data-aos="fade" data-aos-delay="400" className="flex justify-center my-10">
            <div className="w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>

          {/* "The Rhythm Begins In" section */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="my-10 md:my-12 w-full flex justify-center"
          >
            <p className="text-xl ss:text-2xl md:text-4xl font-cormorant font-light text-white px-6 py-3 border-b border-pink-300/50 tracking-wider">
              The Rhythm Begins In...
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mt-8 md:mt-12 flex justify-center">
            <div className="w-full min-w-150 px-6 lg:px-32 flex flex-wrap gap-4 md:gap-8 justify-center">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <div 
                  key={unit} 
                  data-aos="fade-up" 
                  data-aos-delay={index * 150} 
                  className="text-center px-4 md:px-6 py-4 md:py-6 bg-pink-900/20 backdrop-blur-sm rounded-xl border border-pink-300/20 shadow-lg shadow-pink-900/10"
                >
                  <div className="block text-4xl md:text-7xl font-medium text-white font-playfair pb-2 md:pb-3">
                    {value}
                  </div>
                  <div className="block text-sm md:text-xl text-pink-100/80 font-cormorant uppercase tracking-widest">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Register Button */}
          <div className="mt-14 py-4 flex justify-center">
            <button 
              data-aos="fade-up" 
              data-aos-delay="600"
              className="px-8 py-4 rounded-full text-lg md:text-xl font-medium bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 border border-pink-300/30 hover:border-pink-300/60 hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300 font-cormorant tracking-wider"
            >
              REGISTRATIONS COMING SOON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;