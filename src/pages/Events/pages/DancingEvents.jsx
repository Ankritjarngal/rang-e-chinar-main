import PageLayout from "../../../Components/PageLayout";
import { DancingEvents as dancingEventsData } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function DancingEvents() {
  return (
    <PageLayout 
      title={"Dancing Events"} 
      imgUrl={'/slider5.jpg'}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Dancing Events", path: "/events/dancing-events" }
      ]}
    >
      <EventsPageLayout events={dancingEventsData} />
    </PageLayout>
  );
}