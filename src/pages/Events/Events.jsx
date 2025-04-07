import { Route, Routes } from "react-router-dom";
import EventCategory from "./pages/EventCategory";
import Competitions from "./pages/Competitions";
import TalksAndWorkshops from "./pages/TalksAndWorkshops";
import Performances from "./pages/Performances";
import GamingZone from "./pages/GamingZone";
import EventDetails from "./pages/Detailing/EventDetails";
import { useEffect } from "react";
import ScrollToTop from "../../Components/ScrollToTop";
import GameZoneDetails from "./pages/Detailing/GameZoneDetails";
import PerformanceDetails from "./pages/Detailing/PerformanceDetails";
import TalksAndWorkshopsDetails from "./pages/Detailing/TalksAndWorkshopsDetails";
import WomenTech from "./pages/women in tech/WomenTech";
import SingingEvents from "./pages/SingingEvents";
import SingingEventsDetails from "./pages/Detailing/SingingEventsDetails";
import DancingEvents from "./pages/DancingEvents";
import DancingEventsDetails from "./pages/Detailing/DancingEventsDetails";
import Workshop from "./pages/Workshop";
import WorkshopDetails from "./pages/Detailing/WorkshopDetails";
import OtherEvents from "./pages/OtherEvents";
import OtherEventsDetails from "./pages/Detailing/OtherEventsDetails";
import HauntedHouse from "./pages/HauntedHouse";
import HauntedHouseDetails from "./pages/Detailing/HauntedHouseDetails";
import PerformanceEvents from "./pages/PerformanceEvents";

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<EventCategory />} />
        <Route path="/performance-events" element={<PerformanceEvents />} />
        <Route path="/singing-events" element={<SingingEvents />} />
        <Route path="singing-events/:index" element={<SingingEventsDetails />} />
        <Route path="/dancing-events" element={<DancingEvents />} />
        <Route path="dancing-events/:index" element={<DancingEventsDetails />} />
        <Route path="/performances" element={<Performances />} />
        <Route path="performances/:index" element={<PerformanceDetails />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="workshop/:index" element={<WorkshopDetails />} />
        <Route path="/other-events" element={<OtherEvents />} />
        <Route path="other-events/:index" element={<OtherEventsDetails />} />
        <Route path="/haunted-house" element={<HauntedHouse />} />
        <Route path="haunted-house/:index" element={<HauntedHouseDetails />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/talks-and-workshops" element={<TalksAndWorkshops />} />
        <Route path="/gaming-zone" element={<GamingZone />} />
        <Route path="/women-in-tech/*" element={<WomenTech />} />
        <Route path="gaming-zone/:index" element={<GameZoneDetails />} />
        <Route path="competitions/:index" element={<EventDetails />} />
        <Route path="talks-and-workshops/:index" element={<TalksAndWorkshopsDetails />} />
      </Routes>
    </>
  );
}