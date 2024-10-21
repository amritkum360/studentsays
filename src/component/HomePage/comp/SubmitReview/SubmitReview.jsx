import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function SubmitReview({ closeModal }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    closeModal(); // Optionally close the modal on form submission
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Submit Your Review</h2>
      <form onSubmit={handleSubmit}>
        
        {/* School Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg shadow-sm">
            <option>Select a school</option>
            <option>Greenwood High School</option>
            <option>DPS International</option>
            <option>The Heritage School</option>
            <option>Oakridge International</option>
            <option>Ryan International</option>
          </select>
        </div>

        {/* Review Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Review Title</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            placeholder="Enter a title for your review"
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer text-2xl ${
                  (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
        </div>

        {/* Review Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Review Description</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            rows="4"
            placeholder="Share your experience about the school"
          ></textarea>
        </div>

        {/* Reviewer Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            placeholder="Enter your name"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}
