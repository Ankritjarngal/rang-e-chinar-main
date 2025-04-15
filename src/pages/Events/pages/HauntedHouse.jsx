import PageLayout from "../../../Components/PageLayout";
import { HauntedHouse as hauntedHouseData } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function HauntedHouse() {
  return (
    <PageLayout 
      title={"Haunted House"} 
      imgUrl={'/HauntedHouse.png'}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Haunted House", path: "/events/haunted-house" }
      ]}
    >
      <EventsPageLayout events={hauntedHouseData} />
    </PageLayout>
  );
} 