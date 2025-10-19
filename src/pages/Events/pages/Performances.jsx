// src/pages/Events/pages/Performances.jsx

import PageLayout from "../../../Components/PageLayout";
import { Performances as performancesData } from "../../../constants/eventDetails-final";
import EventCard from "../components/EventCard"; // Import EventCard

export default function Performances() {

  if (!performancesData || performancesData.length === 0) {
     return (
       <PageLayout
         title={"Performances"}
         imgUrl={'/common/performance.jpeg'} // Use a relevant image
         breadcrumbs={[
           { label: "Home", path: "/" },
           { label: "Events", path: "/events" },
           { label: "Performances", path: "/events/performances" }
         ]}
       >
          <div className="text-center p-12">No performances listed at the moment.</div>
       </PageLayout>
     );
  }

  return (
    <PageLayout
      title={"Performances"}
      imgUrl={'/common/performance.jpeg'} // Use a relevant image
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Performances", path: "/events/performances" }
      ]}
    >
      {/* Removed EventsPageLayout */}
      <div className="px-5 py-8 flex flex-wrap gap-8 justify-center items-start">
        {performancesData.map((event, index) => {
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