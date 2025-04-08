import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";

export default function PerformanceEvents() {
  const performanceCategories = [
    {
      title: "Singing Events",
      path: "/events/singing-events",
      imgUrl: "/common/performance.jpeg",
    },
    {
      title: "Dancing Events",
      path: "/events/dancing-events",
      imgUrl: "/common/performance.jpeg",
    },
    // {
    //   title: "Performances",
    //   path: "/events/performances",
    //   imgUrl: "/common/performance.jpeg",
    // },
    {
      title: "Other Events",
      path: "/events/other-events",
      imgUrl: "/common/performance.jpeg",
    },
  ];

  return (
    <PageLayout
      title="Events And Competitions"
      imgUrl="/common/performance.jpeg"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Performance Events", path: "/events/performance-events" },
      ]}
    >
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {performanceCategories.map((category, index) => (
            <Link
              to={category.path}
              key={index}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={category.imgUrl}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
