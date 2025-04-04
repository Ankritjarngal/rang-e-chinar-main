import PageLayout from "../../Components/PageLayout";
import Tabview from "./components/Tabview";
export default function Schedule() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[url('/public/common/bg.jpg')] bg-cover bg-center text-white"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(5px)' }}
    >
      <h1 className="text-3xl md:text-6xl font-bold mb-4">Coming Soon</h1>

    </div>
    // <PageLayout 
    //   title={"Event Timings"} 
    //   imgUrl={"/common/schedule.png"}
    //   breadcrumbs={[
    //     { label: "Home", path: "/" },
    //     { label: "Schedule", path: "/schedule" }
    //   ]}
    // >
    //     <div className="px-4 md:px-10 py-4 md:py-10 font-playfair">
    //       <p className="font-semibold font-figtree  text-4xl md:text-5xl text-[#D97706] mb-3 overflow-visible text-center">Schedule</p>
    //       <div>
    //         <Tabview tab1={"Day 1"} tab2={"Day 2"} />
    //       </div>
    //     </div>
    // </PageLayout >
  );
}

