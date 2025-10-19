// src/pages/Events/pages/EventCategory.jsx

import PageLayout from "../../../Components/PageLayout";
// Make sure this path is correct
import { EventCategoryList } from "../../../constants/events";
import CategoryCard from "../components/CategoryCard";

export default function EventCategory() {
  return (
    <PageLayout
      title={"Events"}
      imgUrl={"/common/events.png"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" }
      ]}
    >
      <div className="px-5 py-8 flex gap-8 flex-wrap items-center overflow-hidden justify-center">
        {EventCategoryList.map((item, index) => (
          <CategoryCard
            key={item.id}
            index={index}
            title={item.title}
            // Ensure the URL links to the correct list page route
            url={`/events/${item.url}`}
            img={item.img}
           />
        ))}
      </div>
    </PageLayout>
  );
}