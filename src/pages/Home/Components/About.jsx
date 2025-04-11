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
      // style={{ backgroundImage: "url('/nit.png')", marginBottom: "30px" }}
      // style={{ backgroundImage: "url('/nit.png')", marginBottom: "30px" }}

    >
      {/* Optional: Overlay */}
      <div className="absolute  inset-0 bg-[rgba(71, 41, 41, 0.1)]/90 z-0" />

      {/* Content */}
      <div className="relative z-10  px-6 py-20 lg:px-20 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl  text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white  mb-4">Rang-E-Chinar 2.0</h2>
          <a href="https://nitsri.ac.in/"> <div style={{ backgroundImage: "url('/common/nitlogo.png')", backgroundPosition: 'center', height: '80px' , backgroundRepeat: 'no-repeat', backgroundSize: 'contain', marginTop: '20px' }}>
          </div></a>
          <p className="text-lg md:text-xl font-semibold text-white mb-6">
            NIT Srinagar's Annual Cultural Festival
          </p>
          {/* Main Card */}
          <div className="relative z-10 bg-white/60 backdrop-blur-sm py-16 px-6 md:px-16 font-quicksand text-gray-800 rounded-2xl shadow-md max-w-5xl mx-auto" data-aos="fade-up">

            {/* Image Block */}
           <a href="https://nitsri.ac.in/"> <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/common/nitsrii.jpg"
                alt="NIT Srinagar Campus"
                className="w-full h-auto object-cover"
              />
            </div></a>

            {/* Text Content */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Rang-e-Chinar  – NIT Srinagar’s vibrant annual cultural fest – returns in 2025 as <b style={{fontSize:"18px"}}>Rang-e-Chinar 2.0</b>, bigger, bolder, and better than before, celebrating the timeless harmony of <strong> ‘Roots and Rhythms’</strong>. <br /> A dazzling fusion of heritage and contemporary artistry, this reimagined edition brings together music, dance, drama, and innovation under the canopy of tradition. With electrifying performances, competitive events, and star-studded showcases, we honor our roots while riding the rhythms of creativity. This year’s edition expands its horizons with thoughtfully curated segments aimed at fostering cross-cultural dialogue and creative exchange. Workshops, exhibitions, and interactive installations will offer immersive experiences for participants and audiences alike. Rang-e-Chinar 2.0 aspires not only to entertain, but to inspire and empower the next generation of artists and visionaries. It stands as a tribute to diversity, expression, and the unifying power of culture. <br /> <b> Join us on <u> 2nd & 3rd May</u> as we paint the campus in the hues of passion, talent, and cultural brilliance.</b>
          

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
