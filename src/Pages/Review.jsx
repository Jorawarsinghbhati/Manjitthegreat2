// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// const ReviewPage = () => {
//   const [reviews, setReviews] = useState([]);
//   const [review, setReview] = useState({ name: "", comment: "", rating: "" });

//   // Handle review submission
//   const handleSubmitReview = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5002/api/reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(review),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setReviews([data, ...reviews]); // add new review at top
//         setReview({ name: "", comment: "", rating: "" });
//         alert("✅ Review submitted successfully!");
//       } else {
//         console.error("Failed to post review:", data);
//       }
//     } catch (err) {
//       console.error("Error submitting review:", err);
//     }
//   };

//   // Fetch existing reviews when page loads
//   useEffect(() => {
//     fetch("http://localhost:5002/api/reviews")
//       .then((res) => res.json())
//       .then((data) => setReviews(data))
//       .catch((err) => console.error("Error fetching reviews:", err));
//   }, []);

//   // Black–Green Theme
//   const currentTheme = {
//     background: "#000",
//     textPrimary: "#00FF88",
//     textSecondary: "#99ffaa",
//     accent: "#00cc66",
//     border: "#00aa55",
//     cardBg: "#111",
//   };

//   return (
//     <section
//       id="reviews"
//       className="min-h-screen py-20 px-6"
//       style={{ backgroundColor: currentTheme.background }}
//     >
//       <h2
//         className="text-4xl font-bold text-center"
//         style={{ color: currentTheme.textPrimary }}
//       >
//         Traveler Reviews
//       </h2>
//       <p
//         className="text-center mt-3 max-w-xl mx-auto"
//         style={{ color: currentTheme.textSecondary }}
//       >
//         Hear from our amazing travelers ✨
//       </p>

//       {/* Review Form */}
//       <div
//         className="max-w-2xl mx-auto mt-10 p-6 rounded-2xl shadow-lg"
//         style={{
//           backgroundColor: currentTheme.cardBg,
//           border: `1px solid ${currentTheme.border}`,
//         }}
//       >
//         <h3
//           className="text-2xl font-semibold mb-4"
//           style={{ color: currentTheme.textPrimary }}
//         >
//           Leave a Review
//         </h3>
//         <form onSubmit={handleSubmitReview} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={review.name}
//             onChange={(e) => setReview({ ...review, name: e.target.value })}
//             required
//             className="w-full border rounded-lg p-2"
//             style={{
//               backgroundColor: "#1a1a1a",
//               borderColor: currentTheme.border,
//               color: currentTheme.textPrimary,
//             }}
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={review.email}
//             onChange={(e) => setReview({ ...review, email: e.target.value })}
//             required
//             className="w-full border rounded-lg p-2"
//           />

//           <textarea
//             placeholder="Write your review..."
//             value={review.comment}
//             onChange={(e) => setReview({ ...review, comment: e.target.value })}
//             required
//             className="w-full border rounded-lg p-2 h-28"
//             style={{
//               backgroundColor: "#1a1a1a",
//               borderColor: currentTheme.border,
//               color: currentTheme.textPrimary,
//             }}
//           ></textarea>
//           <select
//             value={review.rating}
//             onChange={(e) => setReview({ ...review, rating: e.target.value })}
//             className="w-full border rounded-lg p-2"
//             required
//             style={{
//               backgroundColor: "#1a1a1a",
//               borderColor: currentTheme.border,
//               color: currentTheme.textPrimary,
//             }}
//           >
//             <option value="">Rate your experience</option>
//             <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
//             <option value="4">⭐⭐⭐⭐ Good</option>
//             <option value="3">⭐⭐⭐ Average</option>
//             <option value="2">⭐⭐ Poor</option>
//             <option value="1">⭐ Terrible</option>
//           </select>
//           <button
//             type="submit"
//             className="w-full font-semibold py-2 rounded-lg transition hover:scale-105"
//             style={{
//               backgroundColor: currentTheme.accent,
//               color: "#000",
//             }}
//           >
//             Submit Review
//           </button>
//         </form>
//       </div>

//       {/* Review Cards */}
//       <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {reviews.length > 0 ? (
//           reviews.map((r, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -5 }}
//               transition={{ type: "spring", stiffness: 150 }}
//               className="rounded-2xl shadow-md p-6"
//               style={{
//                 backgroundColor: currentTheme.cardBg,
//                 border: `1px solid ${currentTheme.border}`,
//               }}
//             >
//               <div className="flex items-center mb-2">
//                 <Star className="w-4 h-4 mr-1 text-yellow-400" />
//                 <span style={{ color: currentTheme.textSecondary }}>
//                   {r.rating} / 5
//                 </span>
//               </div>
//               <p
//                 className="italic mb-3"
//                 style={{ color: currentTheme.textSecondary }}
//               >
//                 “{r.comment}”
//               </p>
//               <p
//                 className="font-semibold text-sm"
//                 style={{ color: currentTheme.accent }}
//               >
//                 – {r.name}
//               </p>
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-center col-span-full text-gray-400">
//             No reviews yet. Be the first to review!
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ReviewPage;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ReviewPage = ({ darkMode, currentTheme }) => {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({ name: "", email: "", comment: "", rating: "" });

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5002/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      });

      const data = await res.json();
      if (res.ok) {
        setReviews([data, ...reviews]);
        setReview({ name: "", email: "", comment: "", rating: "" });
        alert("✅ Review submitted successfully!");
      } else {
        console.error("Failed to post review:", data);
      }
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5002/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <section
      id="reviews"
      className="min-h-screen py-20 px-6"
      style={{ backgroundColor: currentTheme.background }}
    >
      <h2
        className="text-4xl font-bold text-center"
        style={{ color: currentTheme.textPrimary }}
      >
        Traveler Reviews
      </h2>
      <p
        className="text-center mt-3 max-w-xl mx-auto"
        style={{ color: currentTheme.textSecondary }}
      >
        Hear from our amazing travelers ✨
      </p>

      {/* Review Form */}
      <div
        className="max-w-2xl mx-auto mt-10 p-6 rounded-2xl shadow-lg"
        style={{
          backgroundColor: currentTheme.cardBg,
          border: `1px solid ${currentTheme.border}`,
        }}
      >
        <h3
          className="text-2xl font-semibold mb-4"
          style={{ color: currentTheme.textPrimary }}
        >
          Leave a Review
        </h3>

        <form onSubmit={handleSubmitReview} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={review.name}
            onChange={(e) => setReview({ ...review, name: e.target.value })}
            required
            className="w-full border rounded-lg p-2"
            style={{
              backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
              borderColor: currentTheme.border,
              color: currentTheme.textPrimary,
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={review.email}
            onChange={(e) => setReview({ ...review, email: e.target.value })}
            required
            className="w-full border rounded-lg p-2"
            style={{
              backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
              borderColor: currentTheme.border,
              color: currentTheme.textPrimary,
            }}
          />
          <textarea
            placeholder="Write your review..."
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
            required
            className="w-full border rounded-lg p-2 h-28"
            style={{
              backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
              borderColor: currentTheme.border,
              color: currentTheme.textPrimary,
            }}
          ></textarea>

          <select
            value={review.rating}
            onChange={(e) => setReview({ ...review, rating: e.target.value })}
            required
            className="w-full border rounded-lg p-2"
            style={{
              backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
              borderColor: currentTheme.border,
              color: currentTheme.textPrimary,
            }}
          >
            <option value="">Rate your experience</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Poor</option>
            <option value="1">⭐ Terrible</option>
          </select>

          <button
            type="submit"
            className="w-full font-semibold py-2 rounded-lg transition hover:scale-105"
            style={{
              backgroundColor: currentTheme.accent,
              color: currentTheme.buttonText || "#000",
            }}
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Review Cards */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.length > 0 ? (
          reviews.map((r, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="rounded-2xl shadow-md p-6"
              style={{
                backgroundColor: currentTheme.cardBg,
                border: `1px solid ${currentTheme.border}`,
              }}
            >
              <div className="flex items-center mb-2">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                <span style={{ color: currentTheme.textSecondary }}>
                  {r.rating} / 5
                </span>
              </div>
              <p
                className="italic mb-3"
                style={{ color: currentTheme.textSecondary }}
              >
                “{r.comment}”
              </p>
              <p
                className="font-semibold text-sm"
                style={{ color: currentTheme.accent }}
              >
                – {r.name}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No reviews yet. Be the first to review!
          </p>
        )}
      </div>
    </section>
  );
};

export default ReviewPage;
