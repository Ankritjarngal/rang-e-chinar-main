// src/pages/Events/pages/GamingZone.jsx

import { useState } from "react";
import PageLayout from "../../../Components/PageLayout";
import { gamezone } from "../../../constants/eventDetails-final"; // This is likely empty now based on previous steps
import EventCard from "../components/EventCard"; // Import EventCard directly

// Helper function to process gamezone arrays (if needed later)
const processGamezone = (gzArray) => {
  let processed = [];
  if (Array.isArray(gzArray)) {
      gzArray.forEach((category) => {
          if (Array.isArray(category)) {
              processed = processed.concat(category);
          }
      });
  }
  return processed;
};

// Flatten the gamezone data IF it's populated later. For now, it will be empty.
const allGamezoneEvents = processGamezone(gamezone);

// Define categories based on the original structure (even if empty)
const gameCategories = [
    { name: "Esports", events: gamezone[0] || [] },
    { name: "Stage/Stall", events: gamezone[1] || [] },
    { name: "Cultural", events: gamezone[2] || [] },
];

export default function GamingZone() {
  const [activeTab, setActiveTab] = useState(0);

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
        {/* Title */}
        <div className="px-8 pt-8 overflow-visible mb-6">
          <h1 className="font-bold font-montserrat text-5xl md:text-6xl text-gray-800 tracking-tight leading-none mb-2 uppercase">
            <span className="text-green-600">GAMING ZONE </span>
          </h1>
          <div className="w-24 h-1 bg-green-600 mb-4"></div>
        </div>

        {/* Tab Navigation */}
        <div className="px-8 mb-2">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide border-b border-gray-200"> {/* Added border */}
            {gameCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                 // Adjusted styling for better tab appearance
                className={`px-5 py-2 whitespace-nowrap font-medium text-sm md:text-base rounded-t-lg transition-all duration-300 border-b-2 ${
                  activeTab === index
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6 px-5 py-8">
          {gameCategories.map((category, index) => (
            <div
              key={index}
              className={`transition-opacity duration-300 ${
                activeTab === index ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              {/* Check if there are events in the active category */}
              {category.events && category.events.length > 0 ? (
                 <div className="flex flex-wrap gap-8 justify-center items-start">
                   {category.events.map((event, eventIndex) => {
                     const imageUrl = event["Card Image"] ? `/events/${event["Card Image"]}` : undefined;
                     const timeString = `${event["Start Time"] || ""} ${event["End Time"] ? `- ${event["End Time"]}` : ""}`;
                     const detailUrl = `/events/detail/${event.url}`;

                     return (
                       <EventCard
                         key={event.url || eventIndex}
                         title={event["Event Name"]}
                         time={timeString}
                         venue={event["Venue"]}
                         url={detailUrl}
                         image={imageUrl}
                       />
                     );
                   })}
                 </div>
               ) : (
                 // Display message if gamezone array is empty or category has no events
                 <p className="text-center text-gray-500">No events listed for this category yet.</p>
               )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}