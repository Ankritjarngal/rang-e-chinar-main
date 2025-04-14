import SingingEventsDetailsLayout from "../../components/SingingEventsDetailsLayout";
import { useParams } from "react-router-dom";
import { SingingEvents as singingEventsData } from "../../../../constants/eventDetails-final";

export default function SingingEventsDetails() {
  const { index } = useParams();
  const eventIndex = parseInt(index, 10); // Convert index to integer
  
  console.log("All Singing Events Data:", singingEventsData);
  console.log("Event Index:", eventIndex);
  
  // Validate index
  if (isNaN(eventIndex) || eventIndex < 0 || eventIndex >= singingEventsData.length) {
    return <div>Event not found</div>;
  }

  const event = singingEventsData[eventIndex];
  console.log("Selected Event Data:", event);
  console.log("Rules:", event["Rules"]);
  console.log("Judging Criteria:", event["Judging Criteria"]);
  console.log("Certifications:", event["Certifications"]);
  
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Singing Events", path: "/events/singing-events" },
    { label: event["Event Name"], path: `/events/singing-events/${index}` }
  ];

  return (
    <>
      <SingingEventsDetailsLayout
        data={event}
        index={eventIndex}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
}
