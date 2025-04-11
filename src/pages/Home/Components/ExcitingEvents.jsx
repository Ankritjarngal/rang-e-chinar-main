import { cards } from "../../../constants/home-events";
import Card from "./Card";

const ExcitingEvents = () => {
  return (
    <div className="px-4 md:px-[140px] lg:px-[160px] lg2:px-[200px] xl:px-[280px] xl2:px-[320px]">
      <div className="text-left mb-20">
        <p className="text-xl  font-bold font-quicksand text-gray-100">ONLY THE BEST</p>
        <h2 className="text-5xl font-playfair font-bold uppercase overflow-hidden  text-white">
        GET READY FOR THE ULTIMATE EVENT EXPERIENCE
        </h2>
      </div>
      <div className="space-y-8">
        {cards.map((card, index) => (
          <Card key={index} index={index} event={card} />
        ))}
      </div>
    </div>
  );
};

export default ExcitingEvents;
