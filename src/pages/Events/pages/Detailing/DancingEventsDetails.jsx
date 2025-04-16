import DancingEventsDetailsLayout from "../../components/DancingEventsDetailsLayout";
import { useParams } from "react-router-dom";
import { DancingEvents as dancingEventsData } from "../../../../constants/eventDetails-final";

export default function DancingEventsDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= dancingEventsData.length) {
    return <div>Event not found</div>;
  }

  const event = dancingEventsData[eventIndex];
  
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Dancing Events", path: "/events/dancing-events" },
    { label: event["Event Name"], path: `/events/dancing-events/${index}` }
  ];

  return (
    <>
      <DancingEventsDetailsLayout
        data={event}
        index={eventIndex}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
}