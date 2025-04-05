import PerformingEventsDetailsLayout from "../../components/PerformingEventsDetailsLayout";
import { useParams } from "react-router-dom";
import { Workshop as workshopData } from "../../../../constants/eventDetails-final";

export default function WorkshopDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= workshopData.length) {
    return <div>Event not found</div>;
  }

  const event = workshopData[eventIndex];
  
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Workshop", path: "/events/workshop" },
    { label: event["Event Name"], path: `/events/workshop/${index}` }
  ];

  return (
    <>
      <PerformingEventsDetailsLayout
        data={event}
        index={eventIndex}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
} 