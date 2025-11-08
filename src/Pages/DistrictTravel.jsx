import React, { useState } from "react";

const DistrictTravel = () => {
  const [search, setSearch] = useState("");

  const districts = [
    {
      name: "Jaisalmer",
      img: "https://images.unsplash.com/photo-1584452964155-ef139340f0db?auto=format&fit=crop&w=800&q=60",
      info: "The Golden City, famous for sand dunes and desert safaris.",
    },
    {
      name: "Jaipur",
      img: "https://images.unsplash.com/photo-1592595896551-12b77b2a7b42?auto=format&fit=crop&w=800&q=60",
      info: "The Pink City, known for its royal forts and colorful bazaars.",
    },
    {
      name: "Udaipur",
      img: "https://images.unsplash.com/photo-1618248315129-dc8d0a52857e?auto=format&fit=crop&w=800&q=60",
      info: "The City of Lakes, surrounded by palaces and serene water views.",
    },
    {
      name: "Jodhpur",
      img: "https://images.unsplash.com/photo-1616690710400-3a469b7d0f12?auto=format&fit=crop&w=800&q=60",
      info: "The Blue City, with magnificent forts and blue-painted houses.",
    },
  ];

  const filteredDistricts = districts.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-green-500 drop-shadow-[0_0_10px_#22c55e]">
          District Travel
        </h1>
        <p className="text-gray-400 text-lg mt-3">
          Discover the beauty of Rajasthan’s districts 🌍✨
        </p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search a district..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-96 p-3 rounded-xl bg-neutral-900 border border-green-500 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-[0_0_10px_#22c55e]"
        />
      </div>

      {/* District Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredDistricts.length > 0 ? (
          filteredDistricts.map((district, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-green-600 rounded-2xl overflow-hidden shadow-[0_0_15px_#22c55e66] hover:shadow-[0_0_25px_#22c55e] transition-all duration-300"
            >
              <img
                src={district.img}
                alt={district.name}
                className="h-48 w-full object-cover opacity-90 hover:opacity-100 transition"
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold text-green-400">
                  {district.name}
                </h2>
                <p className="text-gray-300 mt-2">{district.info}</p>
                <button className="mt-4 px-5 py-2 bg-green-600 hover:bg-green-700 text-black font-semibold rounded-xl transition transform hover:scale-105 shadow-md hover:shadow-green-500/50">
                  Explore →
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full text-lg">
            No districts found 😕
          </p>
        )}
      </div>
    </div>
  );
};

export default DistrictTravel;
