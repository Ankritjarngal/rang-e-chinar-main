// src/pages/Events/pages/SingingEvents.jsx

import PageLayout from "../../../Components/PageLayout";
import { PaintingEvents as singingEventsData } from "../../../constants/eventDetails-final";
import EventCard from "../components/EventCard"; // Import EventCard

export default function PaintingEvents() {

  if (!singingEventsData || singingEventsData.length === 0) {
     return (
       <PageLayout
         title={"Singing Events"}
         imgUrl={'/common/Singingevents.png'}
         breadcrumbs={[
           { label: "Home", path: "/" },
           { label: "Events", path: "/events" },
           { label: "Singing Events", path: "/events/singing-events" }
         ]}
       >
         <div className="text-center p-12">No singing events listed at the moment.</div>
       </PageLayout>
     );
  }

  return (
    <PageLayout
      title={"Singing Events"}
      imgUrl={'/common/Singingevents.png'}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        // Added link back to the sub-category page
        { label: "Events And Competitions", path: "/events/performance-events"},
        { label: "Singing Events", path: "/events/singing-events" }
      ]}
    >
      {/* Removed EventsPageLayout */}
      <div className="px-5 py-8 flex flex-wrap gap-8 justify-center items-start">
        {singingEventsData.map((event, index) => {
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