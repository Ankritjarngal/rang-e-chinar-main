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
      style={{ backgroundImage: "url('/nit.png')", marginBottom: "30px" }}
    >
      {/* Optional: Overlay */}
      <div className="absolute inset-0 bg-[#eaf8f0]/30 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 py-20 lg:px-20 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Rang-E-Chinar'25</h2>
          <p className="text-lg md:text-xl font-semibold text-green-700 mb-6">
            NIT Srinagar's Annual Cultural Festival
          </p>

          {/* Main Card */}
          <div className="relative z-10 bg-white/60 backdrop-blur-sm py-16 px-6 md:px-16 font-quicksand text-gray-800 rounded-2xl shadow-md max-w-5xl mx-auto" data-aos="fade-up">

            {/* Image Block */}
            <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/common/nitsrii.jpg"
                alt="NIT Srinagar Campus"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Content */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <strong>Rang-e-Chinar – NIT Srinagar’s vibrant annual cultural fest – returns in 2025 as <span className="text-black">Rang-e-Chinar 2.0</span></strong>, <strong>bigger, bolder, and better than before</strong>, celebrating the timeless harmony of <strong>‘Roots and Rhythms’</strong>!
              <br /><br />
              A dazzling fusion of heritage and contemporary artistry, this reimagined edition brings together <strong>music, dance, drama, and innovation</strong> under the canopy of tradition.
              <br /><br />
              With electrifying performances, competitive events, and star-studded showcases, we honor our roots while riding the rhythms of creativity.
              <br /><br />
              <strong>Join us on 2<sup>nd</sup> & 3<sup>rd</sup> May</strong> as we paint the campus in the hues of <strong>passion, talent, and cultural brilliance</strong>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
