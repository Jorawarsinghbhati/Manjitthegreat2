import { useNavigate } from "react-router-dom";
import { MapPin, Sun, Landmark, Car } from "lucide-react";

export default function LocalJaisalmer() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="/Sam_Sand_Dunes_sunset_529b8e68.png"
          alt="Local Jaisalmer Tours"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Local Jaisalmer Tours</h1>
          <p className="max-w-2xl text-lg md:text-xl">
            Discover the Golden City’s hidden gems with our experienced local guides — from majestic forts to desert adventures.
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">About the Tour</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Experience the essence of Jaisalmer with our carefully curated local tours.
          Our expert drivers and guides will take you through the narrow streets,
          magnificent havelis, and golden sandstone forts that define the spirit of this
          desert city. Enjoy a perfect blend of heritage, culture, and adventure as you
          explore iconic destinations like the Jaisalmer Fort, Patwon ki Haveli, and the Sam Sand Dunes.
        </p>

        {/* Highlights */}
        <h3 className="text-xl font-semibold mb-4">Tour Highlights</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <MapPin className="text-orange-500 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold">Famous Landmarks</h4>
              <p>Visit Jaisalmer Fort, Gadsisar Lake, and Patwon ki Haveli with local insights.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Sun className="text-orange-500 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold">Desert Adventures</h4>
              <p>Enjoy camel rides and mesmerizing sunsets at the Sam Sand Dunes.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Landmark className="text-orange-500 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold">Cultural Heritage</h4>
              <p>Explore Rajasthani art, local markets, and traditional architecture.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Car className="text-orange-500 w-6 h-6 mt-1" />
            <div>
              <h4 className="font-semibold">Comfortable Travel</h4>
              <p>Well-maintained vehicles and courteous local drivers ensure a pleasant journey.</p>
            </div>
          </div>
        </div>

        {/* Price Info */}
        <div className="mt-10 p-6 bg-orange-50 dark:bg-orange-950 rounded-2xl">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Pricing</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Local Jaisalmer tours start from just <span className="font-semibold">₹500</span>.
            Pricing may vary based on duration and destinations.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/services")}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition"
          >
            ← Back to Services
          </button>
        </div>
      </div>
    </div>
  );
}
