import PageLayout from "../../Components/PageLayout";
import ContactCard from "./components/ContactCard";
import { teams } from "../../constants/contacts";

export default function Contact() {
  return (
    <PageLayout
      title={"Contact"}
      imgUrl={"/common/contacts.png"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Contact", path: "/contact" }
      ]}
    >
        
        {/* Content container with autumn-themed styling */}
        <div className="relative z-10 pt-8 pb-16">
          {Object.keys(teams).map((teamKey) => (
            <Section key={teamKey} teamname={teamKey} teamMembers={teams[teamKey]} len={teams[teamKey].length} />
          ))}
        </div>
    </PageLayout>
  );
}

const Section = ({ teamname, teamMembers, len }) => (
  <div 
  className="mb-16" 
  style={{
    background: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(5px)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    padding: "24px"
  }}
>
    <div className="text-center text-5xl md:text-5xl overflow-visible  font-figtree textShadow-contact text-amber-400 my-8">
      {teamname} {len != 1 ? "Team" : ""}
    </div>
    <div className="px-5 py-3 flex gap-8 flex-wrap items-center overflow-hidden justify-center  rounded-lg">
      {teamMembers.map((team, index) => (
        <div key={index} className="transform transition-all duration-300 ">
          <ContactCard 
            {...team} 
            cardClass="bg-gradient-to-br from-amber-700/70 to-red-800/70 backdrop-blur-sm border border-amber-500/30"
          />
        </div>
      ))}
    </div>
  </div>
);