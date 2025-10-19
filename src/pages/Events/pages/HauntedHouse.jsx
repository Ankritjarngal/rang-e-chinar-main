// src/pages/Events/pages/HauntedHouse.jsx

import PageLayout from "../../../Components/PageLayout";
import { HauntedHouse as hauntedHouseData } from "../../../constants/eventDetails-final";
import EventCard from "../components/EventCard"; // Import EventCard

export default function HauntedHouse() {
  // Since HauntedHouse is likely just one event, we access the first item
  const event = hauntedHouseData[0];

  return (
    <PageLayout
      title={"Haunted House"}
      imgUrl={'/events/Haunted House.png'} // Corrected image path assumption
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Haunted House", path: "/events/haunted-house" }
      ]}
    >
      <div className="px-5 py-8 flex flex-wrap gap-8 justify-center items-start">
        {/* Check if event data exists before rendering */}
        {event ? (
           <EventCard
             key={event.url}
             title={event["Event Name"]}
             time={`${event["Start Time"] || ""} ${event["End Time"] ? `- ${event["End Time"]}` : ""}`}
             venue={event["Venue"]}
             url={`/events/detail/${event.url}`} // Link to central detail page
             image={event["Card Image"] ? `/events/${event["Card Image"]}` : undefined}
           />
         ) : (
           <p>Haunted House details not available.</p>
         )}
      </div>
    </PageLayout>
  );
}