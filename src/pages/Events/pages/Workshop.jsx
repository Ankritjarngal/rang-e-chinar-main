import PageLayout from "../../../Components/PageLayout";
import { Workshop as workshopData } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function Workshop() {
  return (
    <PageLayout 
      title={"Workshop"} 
      imgUrl={'/workshop.png'}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Workshop", path: "/events/workshop" }
      ]}
    >
      <EventsPageLayout events={workshopData} />
    </PageLayout>
  );
} 