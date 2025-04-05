import PageLayout from "../../../Components/PageLayout";
import { OtherEvents as otherEventsData } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function OtherEvents() {
  return (
    <PageLayout 
      title={"Other Events"} 
      imgUrl={'/common/performance.jpeg'}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Other Events", path: "/events/other-events" }
      ]}
    >
      <EventsPageLayout events={otherEventsData} />
    </PageLayout>
  );
} 