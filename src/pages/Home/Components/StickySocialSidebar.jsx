import { FaLinkedinIn, FaYoutube, FaLeaf } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const StickySocialSidebar = () => {
  return (
    <div className="fixed top-1/2 right-0 z-50 ">
      <ul className="flex flex-col space-y-3">

        {/* Instagram Link */}
        <li>
          <a
            href="https://www.instagram.com/rang_e_chinar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-l-md hover:bg-green-500  "
            aria-label="Instagram"
          >
            <IoLogoInstagram size={20}  />
          </a>
        </li>

        {/* LinkedIn Link */}
        <li>
          <a
            href="https://www.linkedin.com/company/rang-e-chinar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-l-md hover:bg-green-500  "
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20}  />
          </a>
        </li>

        {/* YouTube Link */}
        <li>
          <a
            href="https://www.youtube.com/@NITSrinagarofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-l-md hover:bg-green-500  "
            aria-label="YouTube"
          >
            <FaYoutube size={20}  />
          </a>
        </li>

         <a
        href="https://rangechinar-registration-from.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 bg-pink-800 text-white rounded-r-md hover:bg-pink-500  "
        aria-label="Register"
      >
        <span className="hidden group-hover:inline-block text-sm font-semibold transition-opacity duration-300 mr-2">
          Register
        </span>
        <FaLeaf size={20}  />
      </a>

       
      </ul>
    </div>
  );
};

export default StickySocialSidebar;
