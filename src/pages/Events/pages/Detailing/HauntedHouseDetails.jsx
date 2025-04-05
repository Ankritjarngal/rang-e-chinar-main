import PerformingEventsDetailsLayout from "../../components/PerformingEventsDetailsLayout";
import { useParams } from "react-router-dom";
import { HauntedHouse as hauntedHouseData } from "../../../../constants/eventDetails-final";

export default function HauntedHouseDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= hauntedHouseData.length) {
    return <div>Event not found</div>;
  }

  const event = hauntedHouseData[eventIndex];
  
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Haunted House", path: "/events/haunted-house" },
    { label: event["Event Name"], path: `/events/haunted-house/${index}` }
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