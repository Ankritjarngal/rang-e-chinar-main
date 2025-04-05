import PerformingEventsDetailsLayout from "../../components/PerformingEventsDetailsLayout";
import { useParams } from "react-router-dom";
import { OtherEvents as otherEventsData } from "../../../../constants/eventDetails-final";

export default function OtherEventsDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= otherEventsData.length) {
    return <div>Event not found</div>;
  }

  const event = otherEventsData[eventIndex];
  
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Other Events", path: "/events/other-events" },
    { label: event["Event Name"], path: `/events/other-events/${index}` }
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