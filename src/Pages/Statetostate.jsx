import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Sun, Landmark, Car } from "lucide-react";

export default function LocalJaisalmer() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="/Sam_Sand_Dunes_sunset_529b8e68.png"
          alt="Local Jaisalmer Tours"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4 text-emerald-400"
          >
            Local Jaisalmer Tours
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl text-lg text-gray-300"
          >
            Discover the Golden City's hidden gems with our expert local guides — from majestic forts to desert adventures.
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-4 text-emerald-400"
        >
          About the Tour
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 leading-relaxed mb-10"
        >
          Experience the soul of Jaisalmer through our local tours — guided by seasoned locals who bring the city’s rich history to life.
          Wander through sandstone streets, discover hidden temples, and enjoy breathtaking sunsets at the Sam Sand Dunes.
          From the grandeur of Jaisalmer Fort to the charm of Patwon ki Haveli, every moment is crafted for an unforgettable journey.
        </motion.p>

        {/* Highlights Section */}
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-6 text-emerald-400"
        >
          Tour Highlights
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <MapPin className="text-emerald-400 w-6 h-6" />,
              title: "Famous Landmarks",
              desc: "Explore Jaisalmer Fort, Gadsisar Lake, and Patwon ki Haveli with local insights.",
            },
            {
              icon: <Sun className="text-emerald-400 w-6 h-6" />,
              title: "Desert Adventures",
              desc: "Enjoy camel rides and mesmerizing sunsets at the Sam Sand Dunes.",
            },
            {
              icon: <Landmark className="text-emerald-400 w-6 h-6" />,
              title: "Cultural Heritage",
              desc: "Dive into Rajasthani art, local markets, and traditional craftsmanship.",
            },
            {
              icon: <Car className="text-emerald-400 w-6 h-6" />,
              title: "Comfortable Travel",
              desc: "Ride in clean, air-conditioned vehicles with friendly local drivers.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="p-6 bg-gray-900 border border-gray-800 rounded-2xl shadow-lg hover:border-emerald-500/60"
            >
              <div className="flex items-start gap-4">
                {item.icon}
                <div>
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 p-6 bg-gray-900 border border-gray-800 rounded-2xl shadow-lg text-center"
        >
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">Pricing</h3>
          <p className="text-gray-300">
            Local Jaisalmer tours start from{" "}
            <span className="font-semibold text-emerald-400">₹500</span>.
            Prices vary based on duration and destinations.
          </p>
        </motion.div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/services")}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-semibold transition"
          >
            ← Back to Services
          </button>
        </div>
      </div>
    </div>
  );
}
