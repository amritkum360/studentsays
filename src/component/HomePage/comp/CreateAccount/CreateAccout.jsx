import React, { useState } from 'react';
import { FaGoogle, FaPhoneAlt } from 'react-icons/fa';

export default function CreateAccount({ closeModal }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Account form submitted');
    closeModal(); // Close the modal after submitting the form
  };

  const handleGoogleLogin = () => {
    // Google login logic here
    console.log('Google login');
  };

  const handlePhoneLogin = () => {
    // Phone number login logic here
    console.log('Phone login with:', phoneNumber);
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Student Account</h2>
      
      {/* Account Creation Form */}
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            placeholder="Enter a strong password"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Create Account
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="my-6 text-center text-gray-500">
        <span>OR</span>
      </div>

      {/* Google Login */}
      <div className="text-center">
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white p-3 rounded-lg shadow-lg flex items-center justify-center space-x-2 hover:bg-red-600 transition duration-300"
        >
          <FaGoogle className="text-xl" /> 
          <span>Sign Up with Google</span>
        </button>
      </div>

      {/* Phone Number Login */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
        <div className="flex items-center space-x-2">
          <input
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button
            onClick={handlePhoneLogin}
            className="bg-green-500 text-white p-3 rounded-lg shadow-lg flex items-center hover:bg-green-600 transition duration-300"
          >
            <FaPhoneAlt className="mr-2" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
}
