import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ScheduleItem from "./ScheduleItem";
import { day1Events, day2Events } from "../../../constants/eventDetails-final";

const Tabview = ({ tab1, tab2 }) => {
  return (
    <Tabs>
      {/* Tab Buttons */}
      <TabList className="flex flex-wrap justify-end mr-4 md:mr-16 gap-4 my-6 font-marcellus">
        {/* Tab 1 */}
        <Tab
          className="relative px-12 py-2 text-base font-semibold border-2 rounded-lg cursor-pointer transition-all duration-300
          bg-white text-[#9CBB04] border-[#9CBB04]
          hover:bg-[#eaf4d3] hover:text-[#658000] hover:scale-105"
          selectedClassName="!bg-[#9CBB04] !text-white !border-[#9CBB04]
          !shadow-[0_0_15px_rgba(156,187,4,0.4)]
          !scale-110 !rounded-lg"
        >
          {tab1}
        </Tab>

        {/* Tab 2 */}
        <Tab
          className="relative px-12 py-2 text-base font-semibold border-2 rounded-lg cursor-pointer transition-all duration-300
          bg-white text-[#9CBB04] border-[#9CBB04]
          hover:bg-[#eaf4d3] hover:text-[#658000] hover:scale-105"
          selectedClassName="!bg-[#9CBB04] !text-white !border-[#9CBB04]
          !shadow-[0_0_15px_rgba(156,187,4,0.4)]
          !scale-110 !rounded-lg"
        >
          {tab2}
        </Tab>
      </TabList>

      {/* Content Box */}
      <div className="mx-2 my-1 px-4 py-4 pb-8 rounded-lg font-quicksand">
        <TabPanel className="space-y-4">
          {day1Events.map((item, index) => (
            <ScheduleItem
              key={index}
              title={item["Event Name"]}
              startTime={item["Start Time"]}
              endTime={item["End Time"]}
              venue={item["Venue"]}
              exploreUrl={`/events/${item.url}`}
            />
          ))}
        </TabPanel>

        <TabPanel className="space-y-4">
          {day2Events.map((item, index) => (
            <ScheduleItem
              key={index}
              title={item["Event Name"]}
              startTime={item["Start Time"]}
              endTime={item["End Time"]}
              venue={item["Venue"]}
              exploreUrl={`/events/${item.url}`}
            />
          ))}
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Tabview;


