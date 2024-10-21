import { useState } from 'react';
import { FaSchool, FaMedal } from 'react-icons/fa';

export default function RightSection() {
  // Dummy data for schools with review counts
  const [schools] = useState([
    { name: 'Greenwood High School', city: 'Bangalore', state: 'Karnataka', reviews: 10 },
    { name: 'DPS International', city: 'New Delhi', state: 'Delhi', reviews: 20 },
    { name: 'The Heritage School', city: 'Kolkata', state: 'West Bengal', reviews: 15 },
    { name: 'Oakridge International', city: 'Hyderabad', state: 'Telangana', reviews: 8 },
    { name: 'Ryan International', city: 'Mumbai', state: 'Maharashtra', reviews: 5 },
    { name: 'DPS International', city: 'New Delhi', state: 'Delhi', reviews: 20 },
    { name: 'The Heritage School', city: 'Kolkata', state: 'West Bengal', reviews: 15 },
    { name: 'Oakridge International', city: 'Hyderabad', state: 'Telangana', reviews: 8 },
    { name: 'Ryan International', city: 'Mumbai', state: 'Maharashtra', reviews: 5 },
    { name: 'DPS International', city: 'New Delhi', state: 'Delhi', reviews: 20 },
    { name: 'The Heritage School', city: 'Kolkata', state: 'West Bengal', reviews: 15 },
    { name: 'Oakridge International', city: 'Hyderabad', state: 'Telangana', reviews: 8 },
    { name: 'Ryan International', city: 'Mumbai', state: 'Maharashtra', reviews: 5 },
    { name: 'DPS International', city: 'New Delhi', state: 'Delhi', reviews: 20 },
    { name: 'The Heritage School', city: 'Kolkata', state: 'West Bengal', reviews: 15 },
    { name: 'Oakridge International', city: 'Hyderabad', state: 'Telangana', reviews: 8 },
    { name: 'Ryan International', city: 'Mumbai', state: 'Maharashtra', reviews: 5 },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Box */}
      <div className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm mb-6">
        <FaSchool className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search schools..."
          className="flex-grow outline-none text-gray-700"
        />
        <FaMedal className="text-gray-500 ml-2 cursor-pointer" />
      </div>

      {/* Dummy Schools List */}
      <div className="space-y-4">
        {schools.map((school, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            {/* School Icon */}
            <FaSchool className="text-blue-500 mr-3" size={40} />

            {/* School Information */}
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{school.name}</h3>
              <p className="text-sm text-gray-500">{school.city}, {school.state}</p>
            </div>

            {/* Review Count */}
            <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
              {school.reviews} Reviews
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
