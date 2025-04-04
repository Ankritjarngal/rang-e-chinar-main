// src/pages/contact/components/ContactCard.jsx
export default function ContactCard({ title, name, email, phone }) {
    return (
        <div className="rounded-lg overflow-hidden bg-cover bg-center">
            <div
                className="px-6 py-4"
                style={{
                    background: "url('/xpertise.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "10px",
                    width: "100%",
                    borderRadius: "40px",
                }}
            >
                <h1 className="text-4xl textShadow-md text-yellow-900 font-ostrich" style={{ padding: "10px 0px" }}>
                    {title}
                </h1>
                <p className="text-md my-1 font-bold shadow-text font-cursive text-gray-800">
                    Name: {name}
                </p>
                <p className="text-md my-1 shadow-text font-bold text-gray-800">
                    Email: <a href={`mailto:${email}`} className="text-yellow-900">{email}</a>
                </p>
                <p className="text-md font-bold shadow-text text-gray-800">
                    Phone: <a href={`tel:${phone}`} className="text-yellow-900">{phone}</a>
                </p>
            </div>
        </div>
    );
}
