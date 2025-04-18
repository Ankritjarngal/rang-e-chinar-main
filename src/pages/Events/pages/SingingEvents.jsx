import PageLayout from "../../../Components/PageLayout";
import { SingingEvents as singingEventsData } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function SingingEvents() {
  return (
    <PageLayout 
      title={"Singing Events"} 
      imgUrl={'/common/Singingevents.png'}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Singing Events", path: "/events/singing-events" }
      ]}
    >
      <EventsPageLayout events={singingEventsData} />
    </PageLayout>
  );
}