import PageLayout from "../../../Components/PageLayout";
import { SingingEvents as singingEventsData } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function SingingEvents() {
  return (
    <PageLayout 
      title={"Singing Events"} 
      imgUrl={'/common/performance.jpeg'}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Singing Events", path: "/events/singingevents" }
      ]}
    >
      <EventsPageLayout events={singingEventsData} />
    </PageLayout>
  );
}