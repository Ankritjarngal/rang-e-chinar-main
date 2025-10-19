// src/pages/Events/pages/Detailing/EventDetailsPage.jsx

import { useParams, Navigate, Link } from "react-router-dom";
import PageLayout from "../../../../Components/PageLayout";
// Import the default export which is the combined list
import allEvents from "../../../../constants/eventDetails-final";
import { useEffect } from "react";

// Helper function to find event by URL slug
const findEventBySlug = (slug) => {
  if (!slug) return null;
  // Make sure allEvents is an array before searching
  if (!Array.isArray(allEvents)) {
    console.error("allEvents is not an array:", allEvents);
    return null;
  }
  return allEvents.find(event => event.url === slug);
};

export default function EventDetailsPage() {
  const { eventSlug } = useParams(); // Get the slug from the URL
  const eventData = findEventBySlug(eventSlug);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, [eventSlug]); // Re-scroll if the slug changes

  // Handle case where event is not found
  if (!eventData) {
    console.error(`Event with slug "${eventSlug}" not found.`);
    // Redirect to the main events page if event not found
    return <Navigate to="/events" replace />;
  }

  // Split description safely
  const descriptions = (eventData["Description"] || "").split(";").map(desc => desc.trim()).filter(desc => desc !== "");

  // --- Dynamic Breadcrumbs ---
  let categoryPath = "/events"; // Default path
  const categoryName = eventData.category || "Events";
  if (categoryName === "Workshop") categoryPath = "/events/workshop";
  else if (categoryName === "Fun") categoryPath = "/events/haunted-house";
  else if (categoryName?.startsWith("Gamezone")) categoryPath = "/events/gaming-zone";
  else if (["Competition", "Art", "Media", "Singing", "Dancing", "Performance", "Literary", "Dramatics"].includes(categoryName)) {
     // Link back to the combined "Events and Competitions" list page
     categoryPath = "/events/performance-events";
  }
  // Add specific list page links if needed, e.g.:
  // else if (categoryName === "Singing") categoryPath = "/events/singing-events";


  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: categoryName, path: categoryPath }, // Dynamic category link
    { label: eventData["Event Name"], path: `/events/detail/${eventSlug}` } // Current page uses slug
  ];
  // --- End Dynamic Breadcrumbs ---

  // --- Safely access potentially missing fields ---
  const rules = eventData["Rules"] || "Rules not specified.";
  const criteria = eventData["Judging Criteria"] || "Judging criteria not specified.";
  const certifications = eventData["Certifications"] || "Certification details not specified.";
  const leadName = eventData["Lead Name"] || "N/A";
  const leadContact = eventData["Lead Contact Number"] || "N/A";
  const entryFee = eventData["Outside Entry Fee"] || "NO Fee";
  const displayFee = (entryFee.toLowerCase().includes("no fee") || entryFee === "") ? "Free" : `₹ ${entryFee}`; // More robust check
  const imageUrl = eventData["Card Image"] ? `/events/${eventData["Card Image"]}` : `/common/events.png`;

  return (
    <PageLayout
      title={eventData["Event Name"]}
      imgUrl={imageUrl}
      breadcrumbs={breadcrumbs}
    >
      <div className="px-4 md:px-12 py-4 md:py-12 font-playfair bg-background ShadowLarge">
        {/* Description Section */}
        <div className="mb-8">
          <p className="font-semibold font-figtree textShadow-md text-4xl md:text-5xl text-gray-800 mb-4 overflow-visible">
            {eventData["Event Name"]}
          </p>
          {descriptions.length > 0 ? (
            descriptions.map((desc, index) => (
              <p key={index} className="text-base mb-2">{desc}</p>
            ))
          ) : (
            <p className="text-base mb-2">No description available.</p>
          )}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
          {/* Timing */}
          <div>
            <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-2xl md:text-3xl overflow-visible mb-2">Timing</p>
            <p className="text-base">
              {eventData["Start Time"] || "TBD"}
              {eventData["End Time"] ? ` - ${eventData["End Time"]}` : ""}
              {eventData["Day"] && `, Day ${eventData["Day"]}`}
            </p>
          </div>

          {/* Venue */}
          <div>
            <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-2xl md:text-3xl overflow-visible mb-2">Venue</p>
            <p className="text-base">
              {eventData["Venue"] || "TBD"}
            </p>
          </div>

          {/* Entry Fee */}
          <div>
            <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-2xl md:text-3xl overflow-visible mb-2">
              Entry Fee (Outside NIT)
            </p>
            <p className="text-base">
              {displayFee}
            </p>
            {eventData["NIT Entry Fee"] && !eventData["NIT Entry Fee"].toLowerCase().includes("no fee") && (
               <p className="text-sm text-gray-500 mt-1">
                 (NIT Entry Fee: {eventData["NIT Entry Fee"]})
               </p>
            )}
          </div>
        </div>

        {/* Rules Section (Conditionally Render) */}
        {eventData["Rules"] && (
          <div className="mb-8">
            <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Rules</p>
            <pre className="text-base whitespace-pre-wrap font-sans">{rules}</pre>
          </div>
        )}

        {/* Judging Criteria Section (Conditionally Render) */}
        {eventData["Judging Criteria"] && (
          <div className="mb-8">
            <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Judging Criteria</p>
            <pre className="text-base whitespace-pre-wrap font-sans">{criteria}</pre>
          </div>
        )}

        {/* Certifications Section (Conditionally Render) */}
        {eventData["Certifications"] && (
          <div className="mb-8">
            <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Certifications</p>
            <p className="text-base">{certifications}</p>
          </div>
        )}

         {/* Registration/Form Link Button */}
         {eventData.FormLink && (
           <div className="mb-8">
             <a
               href={eventData.FormLink}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block px-6 md:px-8 py-2 ShadowBlur text-sm md:text-base rounded-md font-semibold text-white bg-primary hover:bg-primary-dark border border-primary focus:outline-none text-center transition duration-200"
             >
               Register / Submit Link
             </a>
           </div>
         )}


        {/* Contact Section */}
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Contact</p>
          <p className="text-base mb-2">For Any Queries Contact:</p>
          <ul className="list-disc list-inside pl-5 font-semibold text-base">
            <li>
              {leadName} ({leadContact})
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}