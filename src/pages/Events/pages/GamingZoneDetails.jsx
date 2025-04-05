import { useParams } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";
import { gamezone } from "../../../constants/eventDetails-final";

export default function GamingZoneDetails() {
  // Get the category and event indices from the URL parameters
  const { categoryIndex, eventIndex } = useParams();
  
  // Convert to numbers
  const catIndex = parseInt(categoryIndex);
  const evtIndex = parseInt(eventIndex);
  
  // Get the event details
  const event = gamezone[catIndex][evtIndex];
  
  // Define tab names for breadcrumb
  const tabNames = ["Esports", "Stage", "Cultural"];
  
  return (
    <PageLayout
      title={event["Event Name"]}
      imgUrl={`/events/${event["Card Image"]}`}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Gaming Zone", path: "/events/gaming-zone" },
        { label: tabNames[catIndex], path: `/events/gaming-zone?tab=${catIndex}` },
        { label: event["Event Name"], path: `/events/gaming-zone/${categoryIndex}/${eventIndex}` },
      ]}
    >
      <div className="w-full max-w-7xl mx-auto px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img 
                className="h-full w-full object-cover md:w-96" 
                src={`/events/${event["Card Image"]}`} 
                alt={event["Event Name"]} 
              />
            </div>
            <div className="p-8">
              <h1 className="text-4xl font-bold text-green-600 mb-4">{event["Event Name"]}</h1>
              
              <div className="mb-6">
                <p className="text-gray-600 mb-2"><span className="font-semibold">Date:</span> {event["Date"]}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Time:</span> {event["Start Time"]} - {event["End Time"]}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Venue:</span> {event["Venue"]}</p>
                {event["Registration Link"] && (
                  <a 
                    href={event["Registration Link"]}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-200"
                  >
                    Register Now
                  </a>
                )}
              </div>
              
              <div className="border-t pt-6">
                <h2 className="text-2xl font-semibold mb-4">Event Description</h2>
                <p className="text-gray-700">{event["Description"] || "No description available."}</p>
              </div>
              
              {event["Rules"] && (
                <div className="border-t pt-6 mt-6">
                  <h2 className="text-2xl font-semibold mb-4">Rules</h2>
                  <p className="text-gray-700">{event["Rules"]}</p>
                </div>
              )}
              
              {event["Contact"] && (
                <div className="border-t pt-6 mt-6">
                  <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                  <p className="text-gray-700">{event["Contact"]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}