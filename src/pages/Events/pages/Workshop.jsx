// src/pages/Events/pages/Workshop.jsx

import PageLayout from "../../../Components/PageLayout";
import { Workshop as WorkshopData } from "../../../constants/eventDetails-final"; // Import specific array
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard"; // Import the updated EventCard

export default function Workshop() {

  if (!WorkshopData || WorkshopData.length === 0) {
    return (
      <PageLayout
        title={"Workshops"}
        imgUrl={"/events/Workshop.png"}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Events", path: "/events" },
          { label: "Workshops", path: "/events/workshop" }
        ]}
      >
          <div className="text-center p-12">No workshops available at the moment.</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={"Workshops"}
      imgUrl={"/events/Workshop.png"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Workshops", path: "/events/workshop" }
      ]}
    >
      <div className="px-5 py-8 flex flex-wrap gap-8 justify-center items-start"> {/* Changed justify */}
        {WorkshopData.map((event, index) => {
          // Construct the props for EventCard
          const imageUrl = event["Card Image"] ? `/events/${event["Card Image"]}` : undefined; // Pass undefined if no image
          const timeString = `${event["Start Time"] || ""} ${event["End Time"] ? `- ${event["End Time"]}` : ""}`;
          const detailUrl = `/events/detail/${event.url}`; // Use the correct detail path

          return (
            // The Link component is NO LONGER needed here because EventCard handles it internally
            <EventCard
              key={event.url || index}
              title={event["Event Name"]}
              time={timeString} // Pass combined start/end time
              venue={event["Venue"]}
              url={detailUrl} // Pass the detail page URL
              image={imageUrl} // Pass the image path
              // index={index} // Pass index if needed for staggering animations, but this card doesn't use it
            />
          );
        })}
      </div>
    </PageLayout>
  );
}