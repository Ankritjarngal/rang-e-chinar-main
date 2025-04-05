import { useState } from "react";
import PageLayout from "../../../Components/PageLayout";
import { gamezone } from "../../../constants/eventDetails-final";
import GamingZoneLayout from "./GamingZoneLayout";

export default function GamingZone() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Custom tab names
  const tabNames = ["Esports", "Stage", "Cultural"];
  const gm0 = gamezone[0];
  const gm1 = gamezone[1];
  const gm2 = gamezone[2];

  return (
    <PageLayout
      title={"Gaming Zone"}
      imgUrl={"/common/gamezone.jpeg"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Gaming Zone", path: "/events/gaming-zone" },
      ]}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Title Section with updated font styling */}
        <div className="px-8 pt-8 overflow-visible mb-6">
          <h1 className="font-bold font-montserrat text-5xl md:text-6xl text-gray-800 tracking-tight leading-none mb-2 uppercase">
            <span className="text-green-600">GAMING ZONE </span>
          </h1>
          <div className="w-24 h-1 bg-green-600 mb-4"></div>
        </div>

        {/* Tab Navigation with custom names */}
        <div className="px-8 mb-2">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {gamezone.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-green-600 text-white shadow-md transform scale-105"
                    : "bg-green-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tabNames[index] || `Category ${index + 1}`}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {gamezone.map((section, index) => (
            <div
              key={index}
              className={`transition-opacity duration-300 ${
                activeTab === index ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <GamingZoneLayout 
                events={index === 0 ? gm0 : index === 1 ? gm1 : gm2} 
                categoryIndex={index}
              />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}