import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      anchorPlacement: "top-center",
      disable: "phone",
      startEvent: "DOMContentLoaded",
      easing: "ease-out",
      mirror: true,
    });
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/nit.png')" , marginBottom:"30px"}}
    >
      {/* Optional: Dark or Blur Overlay for text readability */}
      <div className="absolute inset-0 bg-[#eaf8f0]/30 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 py-20 lg:px-20 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Rang-E-Chinar'25</h2>
          <p className="text-lg md:text-xl font-semibold text-green-700 mb-6">
            NIT Srinagar's Annual Cultural Festival
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed bg-white/70 rounded-xl p-6 shadow-md">
            Rang-E-Chinar is the annual cultural festival of NIT Srinagar, celebrating the vibrant fusion of art, culture,
            and technology. This year's theme, <strong>"Roots and Rythm" "The Rythm begins in"</strong>,
            infuses every aspect of the fest with an eco-conscious spirit.
            <br /><br />
            The heart of Rang-E-Chinar beats with intense hackathons, where teams race against the clock to develop
            sustainable solutions for real-world problems. The startup pitch competition gives budding entrepreneurs a
            platform to showcase their green business ideas, with potential investors in the audience.
            <br /><br />
            Throughout the event, a wide array of competitions challenges participants' technical skills and creativity, from
            coding marathons to robotics face-offs, all with an environmental twist.
            <br /><br />
            The highlight of Rang-E-Chinar is undoubtedly the breathtaking drone show, painting the night sky with dazzling
            formations that tell the story of a greener tomorrow. With its perfect blend of competition, innovation, and
            spectacle, Rang-E-Chinar at NIT Srinagar isn't just a fest – it's a glimpse into a more sustainable future,
            powered by the bright minds of tomorrow's tech leaders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
