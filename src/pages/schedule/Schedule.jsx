// src/pages/Schedule/Schedule.jsx

import PageLayout from "../../Components/PageLayout";
import Tabview from "./components/Tabview";
import Header from "../../Components/Header"; // Assuming PageLayout doesn't add Header, kept it. Remove if PageLayout does.

export default function Schedule() {
  return (
    // Re-enabled the PageLayout for the full schedule view
    <PageLayout 
      title={"Event Timings"} 
      imgUrl={"/common/schedule.png"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Schedule", path: "/schedule" }
      ]}
    >
      <div className="px-4 md:px-10 py-4 md:py-10 font-playfair">
        <p className="font-semibold font-figtree text-4xl md:text-5xl text-[#D97706] mb-3 text-center">
          Schedule
        </p>

        {/* Tabs for different days of the event */}
        <div>
          <Tabview tab1={"Day 1"} tab2={"Day 2"} />
        </div>
      </div>
    </PageLayout>
    
  );
}