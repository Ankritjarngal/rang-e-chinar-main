// src/pages/Events/pages/DancingEvents.jsx

import PageLayout from "../../../Components/PageLayout";
import { DancingEvents as dancingEventsData } from "../../../constants/eventDetails-final";
import EventCard from "../components/EventCard"; // Import EventCard

export default function DancingEvents() {

  if (!dancingEventsData || dancingEventsData.length === 0) {
    return (
       <PageLayout
         title={"Dancing Events"}
         imgUrl={'/slider5.jpg'} // Use appropriate image
         breadcrumbs={[
           { label: "Home", path: "/" },
           { label: "Events", path: "/events" },
           { label: "Dancing Events", path: "/events/dancing-events" }
         ]}
       >
         <div className="text-center p-12">No dancing events listed at the moment.</div>
       </PageLayout>
    );
  }


  return (
    <PageLayout
      title={"Dancing Events"}
      imgUrl={'/slider5.jpg'} // Use appropriate image
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        // Added link back to the sub-category page
        { label: "Events And Competitions", path: "/events/performance-events"},
        { label: "Dancing Events", path: "/events/dancing-events" }
      ]}
    >
      {/* Removed EventsPageLayout */}
      <div className="px-5 py-8 flex flex-wrap gap-8 justify-center items-start">
        {dancingEventsData.map((event, index) => {
          const imageUrl = event["Card Image"] ? `/events/${event["Card Image"]}` : undefined;
          const timeString = `${event["Start Time"] || ""} ${event["End Time"] ? `- ${event["End Time"]}` : ""}`;
          const detailUrl = `/events/detail/${event.url}`;

          return (
            <EventCard
              key={event.url || index}
              title={event["Event Name"]}
              time={timeString}
              venue={event["Venue"]}
              url={detailUrl}
              image={imageUrl}
            />
          );
        })}
      </div>
    </PageLayout>
  );
}