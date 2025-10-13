import { Link } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";

export default function RegisterHome() {
  return (
    <PageLayout
      title={"Event Registration"}
      imgUrl={"/common/register.png"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Register", path: "/Register" }
      ]}
    >
      <div className="px-4 md:px-10 py-4 md:py-10 font-playfair bg-background ShadowLarge">
        <p className="font-semibold font-figtree text-center textShadow-md text-4xl md:text-5xl text-amber-700 mb-3 overflow-visible">
          Registration
        </p>

        <div className="flex flex-col gap-12 items-center px-4 py-10">

          {/* Outside NIT Srinagar Students Card */}
          <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-xl CardShadow p-8 w-full max-w-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-figtree font-extrabold mb-6 text-center">
              Outside NIT Srinagar
            </h2>

            <p className="font-kodeMono font-medium text-base md:text-lg mb-4 text-center">
              Register Here if You're a Non-NIT Srinagar Student <br />
              <span className="font-extrabold text-gray-800">
                Due to ongoing issues with credit card transactions in J&amp;K, we recommend using the Google Form for registration.
              </span>
            </p>

            <p className="font-kodeMono font-medium text-base md:text-lg mb-8 text-center">
              <span className="font-bold">Note:</span> Make sure to keep your institute ID with you for verification.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-amber-50 transition-colors duration-300">
                <Link
                  to={
                    "https://erp.nitsri.ac.in/Academic/Event/iitms59kYF9lC0cj3VbTS6unBiAl+l75Pr6We0g1qjBoOkzq3f3cNp1dZ7YOKj7wb+MDkvhXLxOyJOP47ksp5DwqNGQ=="
                  }
                >
                  Register
                </Link>
              </button>
              <button className="bg-white text-amber-600 font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-amber-50 transition-colors duration-300">
                <Link to={"https://forms.gle/c53TeD59dqLJ1EcG9"}>
                  Register using Google Form
                </Link>
              </button>
            </div>
          </div>

          {/* NIT Srinagar Students Card */}
          <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-black rounded-xl CardShadow p-8 w-full max-w-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-figtree font-extrabold text-black mb-6 text-center">
              NIT Srinagar Students
            </h2>
            <p className="font-kodeMono font-medium text-base md:text-lg mb-4 text-center">
              Register here if you're a student of NIT Srinagar.
            </p>
            <p className="font-kodeMono text-white font-medium text-base md:text-lg mb-8 text-center">
              <span className="font-bold">Note:</span> Make sure to keep your institute ID with you for verification.
            </p>
            <div className="flex flex-col md:flex-row justify-center">
              <button className="bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-300">
                <Link to={"nit-register"}>Register</Link>
              </button>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="w-full max-w-md mx-auto mt-8">
            <label
              htmlFor="upload-common"
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-amber-400 rounded-xl cursor-pointer bg-amber-50 hover:bg-amber-100 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-amber-700 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16V4m0 0l-4 4m4-4l4 4M7 16a4 4 0 104 4h6a2 2 0 002-2v-2a2 2 0 00-2-2h-6a4 4 0 00-4-4z"
                />
              </svg>
              <span className="font-medium text-amber-700">
                Click to upload your ID / photo
              </span>
              <input
                id="upload-common"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
