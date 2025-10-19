// src/pages/Events/Events.jsx

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "../../Components/ScrollToTop";

// --- Page Imports ---
import EventCategory from "./pages/EventCategory";
import Workshop from "./pages/Workshop";          // List Page
import HauntedHouse from "./pages/HauntedHouse";    // List Page (or Detail?)
import GamingZone from "./pages/GamingZone";        // List Page
import PerformanceEvents from "./pages/PerformanceEvents"; // Maps to "Events And Competitions" card
import Competitions from "./pages/Competitions";      // Optional List Page
import Performances from "./pages/Performances";      // Optional List Page
import SingingEvents from "./pages/SingingEvents";    // Optional List Page
import DancingEvents from "./pages/DancingEvents";    // Optional List Page

// Import the Centralized Detail Page
import EventDetailsPage from "./pages/Detailing/EventDetailsPage";

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main Category Page */}
        <Route path="/" element={<EventCategory />} />

        {/* --- List Pages --- */}
        {/* These correspond to the URLs in EventCategoryList */}
        <Route path="/workshop" element={<Workshop />} />
        {/* If Haunted House card should link directly to details: */}
        {/* <Route path="/haunted-house" element={<Navigate to="/events/detail/haunted-house" replace />} /> */}
        {/* Or if it's a list page (assuming only one item for now): */}
        <Route path="/haunted-house" element={<HauntedHouse />} />
        <Route path="/gaming-zone" element={<GamingZone />} />
        <Route path="/performance-events" element={<PerformanceEvents />} />

        {/* --- Optional/Specific List Pages --- */}
        {/* Add these if you need separate pages listing only these types */}
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/performances" element={<Performances />} />
        <Route path="/singing-events" element={<SingingEvents />} />
        <Route path="/dancing-events" element={<DancingEvents />} />

        {/* --- Centralized Detail Route --- */}
        {/* Handles details for ALL event types using the slug */}
        <Route path="detail/:eventSlug" element={<EventDetailsPage />} />

        {/* --- Fallback/Not Found (Optional) --- */}
        {/* You might want a catch-all route here or handle it higher up */}
        {/* <Route path="*" element={<Navigate to="/events" replace />} /> */}

      </Routes>
    </>
  );
}