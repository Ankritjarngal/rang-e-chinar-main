// src/pages/Schedule/components/ScheduleItem.jsx

// import { Link } from "react-router-dom"; // No longer needed

const ScheduleItem = ({
  title,
  startTime,
  endTime,
  venue,
  // exploreUrl, // Removed
  fullDay,
}) => {
  const Titles = title.split(", ");
  return (
    // Updated padding classes (px-5 and py-4) for consistent spacing
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 px-5 py-4 bg-[#F5E1C6] rounded-md font-kodeMono">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
        <h3 className="text-2xl font-bold text-[#B45309] font-figtree py-2 lg:w-64">
          {Titles.map((title, index) => (
            <span key={index} className="block">
              {title}
            </span>
          ))}
        </h3>
        {fullDay ? (
          <span className="mt-2 lg:mt-0 lg:w-52 font-medium">Full Day</span>
        ) : (
          <span className="mt-2 lg:mt-0 lg:w-52  text-[#064641] font-medium">
            {startTime} - {endTime}
          </span>
        )}
      </div>
      <div className="mt-2 lg:max-w-48 lg:mt-0 text-[#064641] font-medium">
        {venue}
      </div>
      {/* Button div completely removed */}
    </div>
  );
};

export default ScheduleItem;