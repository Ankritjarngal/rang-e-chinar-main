// src/constants/events.js

export const EventCategoryList = [
  {
    id: 1,
    title: "Workshop",
    url: "workshop", // Matches route path "/events/workshop"
    img: "/events/Workshop.png", // Assuming images are in public/events
  },
  {
    id: 2,
    title: "Haunted House",
    url: "haunted-house", // Matches route path "/events/haunted-house"
    img: "/events/Haunted House.png",
  },
  {
    id: 3,
    title: "Gaming Zone",
    url: "gaming-zone", // Matches route path "/events/gaming-zone"
    img: "/events/gamezone.png",
  },
  {
    id: 4,
    // Title reflects the card, URL points to the page handling these
    title: "Events And Competitions",
    url: "performance-events", // Matches route path "/events/performance-events"
    img: "/events/Events and Competitions.png",
  }
];