import PerformingEventsDetailsLayout from "../../components/PerformingEventsDetailsLayout";
import { useParams } from "react-router-dom";
import { performingEvents, DancingEvents as dancingEventsData } from "../../../../constants/eventDetails-final";

export default function DancingEventsDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= dancingEventsData.length) {
    return <div>Event not found</div>;
  }

  const event = dancingEventsData[eventIndex];
  return (
    <>
      <PerformingEventsDetailsLayout
        data={event}
        index={eventIndex}
      />
    </>
  );
}