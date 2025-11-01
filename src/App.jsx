import { motion } from "framer-motion";
import { MapPin, Send, Star, Car, Shield, Clock,  Phone, Instagram, Linkedin, Github, Sun, Moon } from "lucide-react";
// import "./App.css";
// import "./Index.css";
import { useState } from "react";

// Theme configuration
const themeStyles = {
  light: {
    background: "#ffffff",
    cardBg: "#ffffff",
    border: "#e5e7eb",
    textPrimary: "#1f2937",
    textSecondary: "#6b7280",
    accent: "#ea580c",
    accentHover: "#c2410c",
    buttonText: "#ffffff",
  },
  dark: {
    background: "#000000",
    cardBg: "#000000",
    border: "#374151",
    textPrimary: "#FFFFFF",
    textSecondary: "#d1d5db",
    accent: "#FF9000",
    accentHover: "#e67e00",
    buttonText: "#FFFFFF",
  },
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const currentTheme = darkMode ? themeStyles.dark : themeStyles.light;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div 
      className="w-full min-h-screen transition-colors duration-300"
      style={{ backgroundColor: currentTheme.background, color: currentTheme.textPrimary }}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        style={{ 
          backgroundColor: currentTheme.accent,
          color: currentTheme.buttonText
        }}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h1 className="text-5xl font-bold mb-6">
            Meet <span style={{ color: currentTheme.accent }}>Manjit Singh Rathore</span>
          </h1>
          <p className="mb-10 max-w-3xl mx-auto" style={{ color: currentTheme.textSecondary }}>
            Your trusted driver and owner with over <strong>5+ years of experience</strong> in providing safe, comfortable, and memorable rides across Rajasthan and beyond.
          </p>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500">
              <img
                src="/Screenshot 2025-10-29 at 7.45.00 PM.png"
                alt="Manjit with SUV"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500">
              <img
                src="/Screenshot 2025-10-29 at 7.44.43 PM.png"
                alt="Manjit with Jeep"
                className="w-full h-[480px] object-cover"
              />
            </div>
          </div>

          {/* Info Section */}
          <div 
            className="rounded-2xl shadow-lg p-10 text-left md:flex md:items-center md:justify-between"
            style={{ 
              backgroundColor: currentTheme.cardBg,
              border: `1px solid ${currentTheme.border}`
            }}
          >
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold">
                About Manjit Singh Rathore
              </h2>
              <p className="leading-relaxed" style={{ color: currentTheme.textSecondary }}>
                Manjit has been driving professionally for over 5 years, serving guests across Jaisalmer, Rajasthan, and neighboring states.
                Known for his polite nature, punctuality, and deep local knowledge, he ensures every journey is safe, scenic, and enjoyable.
              </p>

              <ul className="space-y-3" style={{ color: currentTheme.textSecondary }}>
                <li className="flex items-center gap-3">
                  <Car style={{ color: currentTheme.accent }} /> Experienced with SUVs, Sedans & Jeeps
                </li>
                <li className="flex items-center gap-3">
                  <MapPin style={{ color: currentTheme.accent }} /> Based in Jaisalmer, Rajasthan
                </li>
                <li className="flex items-center gap-3">
                  <Clock style={{ color: currentTheme.accent }} /> Available 24/7 for Local & Outstation Trips
                </li>
                <li className="flex items-center gap-3">
                  <Star style={{ color: currentTheme.accent }} /> Rated 5⭐ by 200+ happy travelers
                </li>
              </ul>
            </div>

            {/* Side Portrait */}
            <div className="mt-10 md:mt-0 md:ml-10">
              <img
                src="/Screenshot 2025-10-30 at 4.07.25 PM.png"
                alt="Manjit Singh Rathore portrait"
                className="w-72 h-72 object-cover rounded-2xl shadow-md mx-auto md:mx-0"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-4">Book Your Ride with Confidence</h3>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full shadow-lg transition"
              style={{ 
                backgroundColor: currentTheme.accent,
                color: currentTheme.buttonText
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = currentTheme.accentHover}
              onMouseLeave={(e) => e.target.style.backgroundColor = currentTheme.accent}
            >
              Contact Manjit Now
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/jaislamer_fort_night_view_1914.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Your Journey Through <br /> Rajasthan Starts Here
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl">
            Explore Rajasthan with Jaisalmer&apos;s trusted taxi service.
            Transparent pricing, experienced drivers, and unforgettable journeys.
          </p>
          <div className="flex items-center mt-4 text-sm opacity-90">
            <MapPin className="w-4 h-4 mr-1" />
            <span>All services start from Jaisalmer</span>
          </div>
          <div className="mt-8 flex space-x-4">
            <a href="#fare-section">
              <button 
                className="font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
                style={{ 
                  backgroundColor: currentTheme.accent,
                  color: currentTheme.buttonText
                }}
              >
                Calculate Your Fare
              </button>
            </a>
            <a href="#footery">
              <button className="bg-white/20 hover:bg-white/30 font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Contact Us
              </button>
            </a>
          </div>
          <div className="absolute bottom-6 animate-bounce">
            <div className="w-5 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALCULATE FARE SECTION ===== */}
      <section
        id="fare-section"
        className="py-20 px-6 flex flex-col items-center"
        style={{ backgroundColor: currentTheme.background }}
      >
        <h2 className="text-4xl font-bold text-center">
          Calculate Your Fare
        </h2>
        <p className="text-center mt-3 max-w-xl" style={{ color: currentTheme.textSecondary }}>
          Get instant pricing for your journey. Select your destination and see the transparent fare breakdown.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Map Box */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ y: 2, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="rounded-2xl shadow-lg p-5 cursor-pointer"
            style={{ 
              backgroundColor: currentTheme.cardBg,
              border: `1px solid ${currentTheme.border}`
            }}
          >
            <div className="flex items-center mb-3">
              <MapPin style={{ color: currentTheme.accent }} />
              <h3 className="text-lg font-semibold ml-2">Route Map</h3>
            </div>
            <iframe
              title="Rajasthan Route Map"
              className="w-full h-80 rounded-xl"
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.5,25.0,77.5,29.5&layer=mapnik"
            ></iframe>
          </motion.div>

          {/* Journey Planner Box */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ y: 2, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="rounded-2xl shadow-lg p-6 cursor-pointer"
            style={{ 
              backgroundColor: currentTheme.cardBg,
              border: `1px solid ${currentTheme.border}`
            }}
          >
            <div className="flex items-center mb-3">
              <Send style={{ color: currentTheme.accent }} />
              <h3 className="text-lg font-semibold ml-2">Plan Your Journey</h3>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium" style={{ color: currentTheme.textSecondary }}>
                  From (Origin)
                </label>
                <input
                  type="text"
                  value="Jaisalmer (Starting Point)"
                  readOnly
                  className="w-full border rounded-lg p-2"
                  style={{ 
                    backgroundColor: darkMode ? '#1f2937' : '#f3f4f6',
                    borderColor: currentTheme.border,
                    color: currentTheme.textSecondary
                  }}
                />
                <p className="text-xs mt-1" style={{ color: currentTheme.textSecondary }}>
                  <MapPin className="inline w-3 h-3" /> All services start from Jaisalmer
                </p>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium" style={{ color: currentTheme.textSecondary }}>
                  To (Destination)
                </label>
                <select 
                  className="w-full border rounded-lg p-2"
                  style={{ 
                    backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                    borderColor: currentTheme.border,
                    color: currentTheme.textPrimary
                  }}
                >
                  <option>Select destination city</option>
                  <option>Jodhpur</option>
                  <option>Jaipur</option>
                  <option>Bikaner</option>
                  <option>Udaipur</option>
                  <option>Mount Abu</option>
                </select>
              </div>
              <button
                type="button"
                className="w-full font-semibold py-2 rounded-lg transition"
                style={{ 
                  backgroundColor: currentTheme.accent,
                  color: currentTheme.buttonText
                }}
              >
                ₹ Calculate Distance & Price
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ===== OUR SERVICES SECTION ===== */}
      <section className="py-20 px-6" style={{ backgroundColor: currentTheme.background }}>
        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>
        <p className="text-center mt-3 max-w-xl mx-auto" style={{ color: currentTheme.textSecondary }}>
          From local tours to long-distance journeys, we&apos;ve got you covered
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Local Jaisalmer Tours",
              desc: "Explore the Golden City's magnificent forts, havelis, and cultural landmarks with our experienced local drivers.",
              price: "Starting from ₹500",
              icon: <MapPin style={{ color: currentTheme.accent }} />,
              image: "/Sam_Sand_Dunes_sunset_529b8e68.png"
            },
            {
              title: "District Travel",
              desc: "Comfortable rides to nearby districts with transparent pricing at just ₹14 per kilometer.",
              price: "Starting from ₹14/km",
              icon: <Car style={{ color: currentTheme.accent }} />,
              image: "/Desert_highway_Rajasthan_9071d489.png"
            },
            {
              title: "State-to-State Journeys",
              desc: "Long-distance travel across state borders with competitive rates and experienced drivers.",
              price: "Starting from Custom Pricing",
              icon: <Shield style={{ color: currentTheme.accent }} />,
              image: "/Gadisar_Lake_reflection_2c967e5b.png"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ y: 2, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="rounded-2xl shadow-md overflow-hidden cursor-pointer"
              style={{ 
                backgroundColor: currentTheme.cardBg,
                border: `1px solid ${currentTheme.border}`
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center mb-2">
                  {service.icon}
                  <h3 className="text-lg font-semibold ml-2">{service.title}</h3>
                </div>
                <p className="text-sm mb-3" style={{ color: currentTheme.textSecondary }}>
                  {service.desc}
                </p>
                <p className="font-semibold text-sm" style={{ color: currentTheme.accent }}>
                  {service.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="py-20 px-6" style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}>
        <h2 className="text-4xl font-bold text-center">
          Why Choose Us
        </h2>
        <p className="text-center mt-3 max-w-xl mx-auto" style={{ color: currentTheme.textSecondary }}>
          Experience the difference with our professional taxi service
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "10+ Years Experience",
              desc: "Trusted by thousands of travelers across Rajasthan",
              icon: "⏰",
            },
            {
              title: "Well-Maintained Fleet",
              desc: "Clean, comfortable vehicles serviced regularly",
              icon: "🚗",
            },
            {
              title: "Transparent Pricing",
              desc: "No hidden charges, clear fare breakdown",
              icon: "💰",
            },
            {
              title: "24/7 Availability",
              desc: "Book anytime, travel anytime with our reliable service",
              icon: "🛡️",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="rounded-2xl shadow-md p-8 text-center cursor-pointer"
              style={{ 
                backgroundColor: currentTheme.cardBg,
                border: `1px solid ${currentTheme.border}`
              }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold">
                {card.title}
              </h3>
              <p className="text-sm mt-2" style={{ color: currentTheme.textSecondary }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-20 text-center" style={{ backgroundColor: currentTheme.background }}>
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-12" style={{ color: currentTheme.textSecondary }}>
          Ready to start your journey? Contact us today
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          {/* Contact Details */}
          <div 
            className="rounded-2xl shadow-md p-8 text-left"
            style={{ 
              backgroundColor: currentTheme.cardBg,
              border: `1px solid ${currentTheme.border}`
            }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>

            <div className="flex items-center mb-5">
              <div 
                className="p-3 rounded-xl"
                style={{ backgroundColor: darkMode ? '#1f2937' : '#ffedd5' }}
              >
                <Phone style={{ color: currentTheme.accent }} />
              </div>
              <div className="ml-4">
                <p className="text-sm" style={{ color: currentTheme.textSecondary }}>Call us anytime</p>
                <p className="font-bold text-lg" style={{ color: currentTheme.accent }}>9680776189</p>
              </div>
            </div>

            <div className="flex items-center mb-5">
              <div 
                className="p-3 rounded-xl"
                style={{ backgroundColor: darkMode ? '#1f2937' : '#ffedd5' }}
              >
                <Clock style={{ color: currentTheme.accent }} />
              </div>
              <div className="ml-4">
                <p className="text-sm" style={{ color: currentTheme.textSecondary }}>Operating Hours</p>
                <p className="font-bold">24/7 Available</p>
              </div>
            </div>

            <div className="flex items-center">
              <div 
                className="p-3 rounded-xl"
                style={{ backgroundColor: darkMode ? '#1f2937' : '#ffedd5' }}
              >
                <MapPin style={{ color: currentTheme.accent }} />
              </div>
              <div className="ml-4">
                <p className="text-sm" style={{ color: currentTheme.textSecondary }}>Location</p>
                <p className="font-bold">Jaisalmer, Rajasthan</p>
              </div>
            </div>
          </div>

          {/* Follow Section */}
          <div 
            className="rounded-2xl shadow-md p-8 text-left"
            style={{ 
              backgroundColor: currentTheme.cardBg,
              border: `1px solid ${currentTheme.border}`
            }}
          >
            <h3 className="text-2xl font-semibold mb-6">Follow Our Journey</h3>

            <div className="space-y-5">
              {[
                { 
                  name: "Instagram", 
                  handle: "@Jorawar_Singh", 
                  url: "https://www.instagram.com/Jorawar_Singh",
                  icon: <Instagram style={{ color: currentTheme.accent }} />
                },
                { 
                  name: "LinkedIn", 
                  handle: "Jorawar Singh", 
                  url: "https://www.linkedin.com/in/jorawar-singh",
                  icon: <Linkedin style={{ color: currentTheme.accent }} />
                },
                { 
                  name: "GitHub", 
                  handle: "NITianjorawar", 
                  url: "https://github.com/NITianjorawar",
                  icon: <Github style={{ color: currentTheme.accent }} />
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl transition"
                  style={{ 
                    backgroundColor: darkMode ? '#1f2937' : '#f3f4f6'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = darkMode ? '#374151' : '#ffedd5'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = darkMode ? '#1f2937' : '#f3f4f6'}
                >
                  {social.icon}
                  <div className="ml-3">
                    <p className="font-semibold">{social.name}</p>
                    <p className="text-sm" style={{ color: currentTheme.textSecondary }}>{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="footery" className="py-10" style={{ 
        backgroundColor: currentTheme.background,
        borderTop: `1px solid ${currentTheme.border}`
      }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2" style={{ color: currentTheme.textSecondary }}>
              <li>
                <a
                  href="/fare"
                  className="hover:text-orange-500 transition-colors"
                  style={{ color: currentTheme.textSecondary }}
                >
                  Calculate Fare
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition-colors"
                  style={{ color: currentTheme.textSecondary }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2" style={{ color: currentTheme.textSecondary }}>
              <li>Jaisalmer</li>
              <li>Nearby Districts</li>
              <li>Rajasthan State</li>
              <li>Interstate Travel</li>
            </ul>
          </div>

          {/* Pricing */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pricing</h4>
            <ul className="space-y-2" style={{ color: currentTheme.textSecondary }}>
              <li>District: ₹14/km</li>
              <li>Toll Tax: Excluded</li>
              <li>State Tax: Excluded</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[
                { 
                  icon: <Instagram style={{ color: currentTheme.accent }} />,
                  url: "https://www.instagram.com/Jorawar_Singh"
                },
                { 
                  icon: <Linkedin style={{ color: currentTheme.accent }} />,
                  url: "https://www.linkedin.com/in/jorawar-singh"
                },
                { 
                  icon: <Github style={{ color: currentTheme.accent }} />,
                  url: "https://github.com/NITianjorawar"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl transition"
                  style={{ 
                    backgroundColor: darkMode ? '#1f2937' : '#ffedd5'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 pt-6 text-center text-sm" style={{ 
          borderTop: `1px solid ${currentTheme.border}`,
          color: currentTheme.textSecondary
        }}>
          <p>© 2025 Jaisalmer Taxi Service. All rights reserved.</p>
          <p className="mt-2">
            Made with <span className="text-red-500">❤️</span> in Jaisalmer, Rajasthan
          </p>
        </div>
      </footer>
    </div>
    
  );
}

export default App;