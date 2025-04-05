import PerformingEventsDetailsLayout from "../../components/PerformingEventsDetailsLayout";
import { useParams } from "react-router-dom";
import {performingEvents, SingingEvents as singingEventsData} from "../../../../constants/eventDetails-final";

export default function SingingEventsDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= singingEventsData.length) {
    return <div>Event not found</div>;
  }

  const event = singingEventsData[eventIndex];
  
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Singing Events", path: "/events/singing-events" },
    { label: event["Event Name"], path: `/events/singing-events/${index}` }
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
