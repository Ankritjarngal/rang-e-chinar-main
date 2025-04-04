import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
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
    <div className='px-4 sm:px-0 flex justify-center items-center relative font-playfair'>
      {/* Autumn decorative elements */}
      <div className="absolute top-0 left-0 w-16 h-32 bg-contain bg-no-repeat opacity-70 autumn-leaf-left"></div>
      <div className="absolute bottom-0 right-0 w-16 h-32 bg-contain bg-no-repeat opacity-70 autumn-leaf-right"></div>
      <div
        data-aos="fade-down"
        className={`p-8 my-40 ${lightPrimaryBg} sm:p-12 md:w-3/5 sm:w-4/5  rounded-lg border-l-2 border-t-2 border-primary`}
      >
        <div className='overflow-visible mb-5'>
          <p className='text-sm sm:text-base font-semibold text-rustRed font-quicksand'>
            NIT Srinagar's Annual Cultural Festival
          </p>
          <h2 className='text-primary  text-5xl sm:text-6xl md:text-7xl overflow-visible font-bold font-playfair mt-2 autumn-title tracking-wider'>
            Rang-E-Chinar
          </h2>
        </div>
        <div>
          <p className='text-lg sm:text-xl md:text-xl text-text leading-relaxed font-quicksand'>
            Rang-E-Chinar is the annual cultural festival of NIT Srinagar, celebrating the vibrant fusion of art, culture, and technology. This year's theme, "Greener Innovations: Engineering a Sustainable World," infuses every aspect of the fest with an eco-conscious spirit. The heart of Rang-E-Chinar beats with intense hackathons, where teams race against the clock to develop sustainable solutions for real-world problems. The startup pitch competition gives budding entrepreneurs a platform to showcase their green business ideas, with potential investors in the audience. Throughout the event, a wide array of competitions challenges participants' technical skills and creativity, from coding marathons to robotics face-offs, all with an environmental twist. The highlight of Rang-E-Chinar is undoubtedly the breathtaking drone show, painting the night sky with dazzling formations that tell the story of a greener tomorrow. With its perfect blend of competition, innovation, and spectacle, Rang-E-Chinar at NIT Srinagar isn't just a fest – it's a glimpse into a more sustainable future, powered by the bright minds of tomorrow's tech leaders.
          </p>
        </div>
        {/* Autumn decorative leaf divider */}
        <div className="flex justify-center mt-8">
          <div className="autumn-leaf-divider"></div>
        </div>
      </div>
    </div>
  );
}

export default About;