import PerformingEventsDetailsLayout from "../../components/PerformingEventsDetailsLayout";
import { useParams } from "react-router-dom";
import { Performances as performancesData } from "../../../../constants/eventDetails-final";

export default function PerformanceDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= performancesData.length) {
    return <div>Event not found</div>;
  }

  const event = performancesData[eventIndex];
  
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Performances", path: "/events/performances" },
    { label: event["Event Name"], path: `/events/performances/${index}` }
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
