import Header from "../../Components/Header";

export default function Register() {
  return (
    <>
      {/* Header Section */}
      <div>
        <Header />
      </div>

      {/* Postponement Announcement */}
     
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-[url('/public/common/bg.jpg')] bg-cover bg-center text-white px-6 py-12 text-center"
            >  
           <a href="https://rangechinar-registration-from.vercel.app/"></a>
      </div>
    </>
  );
}
