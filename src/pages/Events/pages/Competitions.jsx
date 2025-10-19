// src/pages/Events/pages/Competitions.jsx

import PageLayout from "../../../Components/PageLayout";
import { competitions as competitionsData } from "../../../constants/eventDetails-final"; // Import specific array
import EventCard from "../components/EventCard"; // Import EventCard

export default function Competitions() {

  // Check if data exists
  if (!competitionsData || competitionsData.length === 0) {
    return (
       <PageLayout
         title={"Competitions"}
         imgUrl={"/common/conpetition.jpeg"}
         breadcrumbs={[
           { label: "Home", path: "/" },
           { label: "Events", path: "/events" },
           { label: "Competitions", path: "/events/competitions" }
         ]}
       >
         <div className="text-center p-12">No competitions listed at the moment.</div>
       </PageLayout>
    );
  }

  return (
    <PageLayout
      title={"Competitions"}
      imgUrl={"/common/conpetition.jpeg"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Competitions", path: "/events/competitions" }
      ]}
    >
      {/* Removed Tabs Layout */}
      <div className="px-5 py-8 flex flex-wrap gap-8 justify-center items-start">
        {competitionsData.map((event, index) => {
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