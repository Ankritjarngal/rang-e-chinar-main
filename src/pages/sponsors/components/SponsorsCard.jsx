import React from 'react';

// Sample data structure
const sampleSponsors = {
  "Title Sponsor": [
    {
      name: "Bureau of Indian Standards",
      tagline: "मानक: पथप्रदर्शक:",
      description: "The Bureau of Indian Standards (BIS) is the National Standards Body of India, a statutory organization responsible for the development and implementation of standards for products, services, and systems.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop" // Placeholder
    }
  ],
  "Media Partners":
    [
        {
            name:"RK",
            tagline:"Rising Kashmir",
            description:"The Bureau of Indian Standards (BIS) is the National Standards Body of India, a statutory organization responsible for the development and implementation of standards for products, services, and systems.",
            image:""
        },
        {
            name:"ANN News",
            tagline:"24x7 ",
            description:"The Bureau of Indian Standards (BIS) is the National Standards Body of India, a statutory organization responsible for the development and implementation of standards for products, services, and systems.",
            image:""
        }
    ],
    "Prinitng Partner":
    [
        {
            name:"Rampage",
            tagline:"Advertising Agency",
            description:"The Bureau of Indian Standards (BIS) is the National Standards Body of India, a statutory organization responsible for the development and implementation of standards for products, services, and systems.",
            image:""
        }
    ],
    "Other sponsors":
    [
        {
            name:"J&K Bank",
            tagline:"Advertising Agency",
            description:"The Bureau of Indian Standards (BIS) is the National Standards Body of India, a statutory organization responsible for the development and implementation of standards for products, services, and systems.",
            image:""
        }
    ]
};
const mediasponsors = {
  "Media Partners":
    [
        {
            name:"RK",
            tagline:"Rising Kashmir",
            description:"The Bureau of Indian Standards (BIS) is the National Standards Body of India, a statutory organization responsible for the development and implementation of standards for products, services, and systems.",
            image:""
        },
        {
            name:"ANN News",
            tagline:"24x7 ",
            description:"The Bureau of Indian Standards (BIS) is the National Standards Body of India, a statutory organization responsible for the development and implementation of standards for products, services, and systems.",
            image:""
        }
    ],
};
 

function SponsorCard({ title, sponsor }) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      {/* Title Section */}
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 font-serif text-center pb-3 border-b-4 border-amber-600">
          {title}
        </h2>
      </div>

      {/* Sponsor Card */}
      <div className="bg-gradient-to-br from-white via-emerald-50 to-amber-50 rounded-2xl shadow-xl overflow-hidden border-2 border-amber-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
          {/* Image Section */}
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-xs rounded-xl overflow-hidden shadow-lg border-4 border-white">
              {sponsor.image ? (
                <img 
                  src={sponsor.image} 
                  alt={sponsor.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="md:col-span-2 flex flex-col justify-center space-y-4">
            {/* Name */}
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 font-serif leading-tight">
              {sponsor.name}
            </h3>

            {/* Tagline */}
            {sponsor.tagline && (
              <p className="text-lg md:text-xl font-semibold text-amber-700 italic border-l-4 border-amber-600 pl-4 py-1">
                {sponsor.tagline}
              </p>
            )}

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-sans">
              {sponsor.description}
            </p>

            
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component to display all sponsors
export default function SponsorsDisplay() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-amber-50 py-12 px-4">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">
            Our Sponsors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are grateful to our sponsors for their continued support and partnership
          </p>
        </div>

        {/* Sponsors List */}
        {Object.entries(sampleSponsors).map(([title, sponsors]) => (
          <div key={title}>
            {sponsors.map((sponsor, index) => (
              <SponsorCard 
                key={index}
                title={title}
                sponsor={sponsor}
              />
            ))}
          </div>
        ))}

        {/* Additional Sponsor Categories (Example) */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Platinum Sponsors - Smaller Cards */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4 pb-2 border-b-2 border-amber-500">
              Media Sponsors
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                <div className="w-16 h-16 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-lg text-emerald-900">Sponsor Name</h4>
                  <p className="text-sm text-gray-600">Supporting excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Sponsors - Smaller Cards */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4 pb-2 border-b-2 border-amber-500">
              Gold Sponsors
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-lg text-emerald-900">Sponsor Name</h4>
                  <p className="text-sm text-gray-600">Powering innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}