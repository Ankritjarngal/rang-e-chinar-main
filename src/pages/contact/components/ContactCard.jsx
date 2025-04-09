// src/pages/contact/components/ContactCard.jsx
import React from 'react';

export default function ContactCard({ title, name, email, phone }) {
    return (
        <div className="rounded-lg overflow-hidden bg-cover bg-center shadow-lg transition-transform duration-300 hover:transform hover:scale-105 mb-6 w-full sm:w-auto">
            <div
                className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
                style={{
                    background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.7))`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "15px",
                    border: "1px solid rgba(210, 180, 140, 0.7)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-emerald-800 font-serif"
                    style={{
                        textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                        borderBottom: "2px solid #c7a254",
                        paddingBottom: "6px sm:8px"
                    }}>
                    {title}
                </h1>
                <p className="text-base sm:text-lg my-1 sm:my-2 font-medium text-gray-800 font-sans">
                    <span className="font-bold text-emerald-700">Name:</span> {name}
                </p>
                <p className="text-base sm:text-lg my-1 sm:my-2 font-medium text-gray-800 font-sans break-words">
                    <span className="font-bold text-emerald-700">Email:</span>{" "}
                    <a href={`mailto:${email}`} className="text-amber-700 hover:text-amber-900 hover:underline transition-colors">{email}</a>
                </p>
                <p className="text-base sm:text-lg my-1 sm:my-2 font-medium text-gray-800 font-sans">
                    <span className="font-bold text-emerald-700">Phone:</span>{" "}
                    <a href={`tel:${phone}`} className="text-amber-700 hover:text-amber-900 hover:underline transition-colors">{phone}</a>
                </p>
            </div>
        </div>
    );
}