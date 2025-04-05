import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GamingZoneLayout = ({ events, categoryIndex }) => {
  return (
    <div className="bg-background ShadowLarge">
      <div className="font-playfair px-8 pt-8 overflow-visible">
        <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl overflow-visible">
          Event List
        </p>
      </div>
      <div className="px-10 flex flex-wrap justify-center gap-8 pt-20 pb-10 relative ">
        {events.map((item, index) => (
          <EventCard
            key={index}
            title={item["Event Name"]}
            time={item["Start Time"] + " - " + item["End Time"]}
            venue={item["Venue"]}
            image={`/events/${item["Card Image"]}`}
            url={`${categoryIndex}/${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GamingZoneLayout;






function EventCard({ title, time, venue, url, image }) {
  return (
    <>
      <Link
        to={url}
        className="rounded-xl bg-[url('/common/background-2.png')] bg-white flex flex-col items-center BoxShadow w-[280px] md:w-[310px] px-4 py-4 mb-6"
      >
        <img
          loading="lazy"
          className="w-[250px] h-[330px] md:w-[280px] md:h-[360px] overflow-hidden z-20 absolute -mt-10 rounded-xl ImgShadow transform hover:scale-105 transition duration-200 ease-in-out"
          src={image != "/events/undefined" ? image : "/events/meme.jpg"}
          alt=""
        />
        <div className="mt-[300px] md:mt-[340px] w-full">
          <p className="font-semibold text-2xl text-white textShadow-sm font-body normalcase capitalize">
            {title}
          </p>
          <p className="text-sm md:text-base text-primary font-semibold font-body mt-2">{time}</p>
          <p className="text-base text-secondary mt-3 font-body">{venue}</p>
        </div>
      </Link>
    </>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};