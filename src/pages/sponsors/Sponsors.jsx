// Sponsors.jsx
import React from 'react';
import PageLayout from "../../Components/PageLayout";
// import bis from "../../../public/sponsors/bis.png"
const sponsors = {
    "Title Sponsor": [
        {
            name: "Bureau of Indian Standards",
            tagline: "मानक: पथप्रदर्शक:",
            description: "The Bureau of Indian Standards (BIS) is the National Standards Body of India, a statutory organization responsible for the development and implementation of standards for products, services, and systems.",
            image: "/sponsors/bis.jpg"
        }
    ],
    "Media Partners": [
        {
            name: "Rising Kashmir",
            tagline: "Rising Kashmir",
            image: "/sponsors/rk.jpg"
        },
        {
            name: "ANN News",
            tagline: "24x7",
            image: "/sponsors/ann.jpg"
        }
    ],
    "Printing Partner": [
        {
            name: "Rampage Advertising Agency",
            tagline: "Advertising Agency",
            image: "/sponsors/rampage.jpg"
        }
    ],
    "Other Sponsors": [
        {
            name: "J&K Bank",
            tagline: "Advertising Agency",
            image: "/sponsors/jk.jpg"
        }
    ]
};

// Title Sponsor Card - Large with full details
function TitleSponsorCard({ name, tagline, description, image, cardClass }) {
    return (
        <div className={`rounded-2xl shadow-xl overflow-hidden border-2 border-amber-200/50 hover:shadow-2xl  ${cardClass || 'bg-white'}`}>
            <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
                {/* Image Section */}
                <div className="md:col-span-1 flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-xs rounded-xl overflow-hidden shadow-lg border-4 border-white/30 backdrop-blur-sm">
                        {image ? (
                            <img 
                                src={image} 
                                alt={name}
                                className="w-200 h-full"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center">
                                <span className="text-white text-6xl font-bold drop-shadow-lg">
                                    {name.charAt(0)}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-2 flex flex-col justify-center space-y-4">
                    {/* Name */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-serif leading-tight drop-shadow-lg">
                        {name}
                    </h3>

                    {/* Tagline */}
                    {tagline && (
                        <p className="text-lg md:text-xl font-semibold text-amber-200 italic border-l-4 border-amber-400 pl-4 py-2 bg-black/20 rounded">
                            {tagline}
                        </p>
                    )}

                    {/* Description */}
                    {description && (
                        <p className="text-base md:text-lg text-white/90 leading-relaxed font-sans bg-black/20 p-4 rounded-lg backdrop-blur-sm">
                            {description}
                        </p>
                    )}

                    
                </div>
            </div>
        </div>
    );
}

// Regular Sponsor Card - Compact with just image and name
function RegularSponsorCard({ name, image, cardClass }) {
    return (
        <div className={`rounded-xl shadow-lg overflow-hidden border-2 border-amber-200/50   ${cardClass || 'bg-white'}`}>
            <div className="p-6 flex flex-col items-center space-y-4">
                {/* Image Section */}
                <div className="relative w-40 h-40 rounded-lg overflow-hidden shadow-md border-2 border-white/30 backdrop-blur-sm">
                    {image ? (
                        <img 
                            src={image} 
                            alt={name}
                            className="w-full h-full object-cover bg-white"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center">
                            <span className="text-white text-5xl font-bold drop-shadow-lg">
                                {name.charAt(0)}
                            </span>
                        </div>
                    )}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white text-center drop-shadow-lg">
                    {name}
                </h3>
            </div>
        </div>
    );
}

// Main Sponsors Component
export default function Sponsors() {
    return (
        <PageLayout
            title={"Sponsors"}
            imgUrl={"/common/sponsors.png"}
            breadcrumbs={[
                { label: "Home", path: "/" },
                { label: "Sponsors", path: "/sponsors" }
            ]}
        >
            <div className="relative z-10 pt-8 pb-16">
                {Object.keys(sponsors).map((teamKey) => (
                    <Section 
                        key={teamKey} 
                        teamname={teamKey} 
                        teamMembers={sponsors[teamKey]} 
                    />
                ))}
            </div>
        </PageLayout>
    );
}

const Section = ({ teamname, teamMembers }) => {
    const isTitleSponsor = teamname === "Title Sponsor";
    
    return (
        <div 
            className="mb-16" 
            style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                padding: "24px"
            }}
        >
            <div className="text-center text-4xl md:text-5xl font-bold font-figtree text-amber-400 my-8 drop-shadow-lg">
                {teamname}
            </div>
            
            <div className="px-5 py-3 flex gap-8 flex-wrap items-center justify-center rounded-lg">
                {teamMembers.map((team, index) => (
                    <div key={index} className="transform transition-all duration-300 flex justify-center">
                        {isTitleSponsor ? (
                            <TitleSponsorCard 
                                {...team} 
                                cardClass="bg-gradient-to-br from-amber-700/70 to-red-800/70 backdrop-blur-sm border border-amber-500/30"
                            />
                        ) : (
                            <RegularSponsorCard 
                                name={team.name}
                                image={team.image}
                                cardClass="bg-gradient-to-br from-amber-700/70 to-red-800/70 backdrop-blur-sm border border-amber-500/30"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};