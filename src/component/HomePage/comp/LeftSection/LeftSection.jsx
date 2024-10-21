import React, { useState } from 'react';
import SubmitReview from '../SubmitReview/SubmitReview'; 
import CreateAccount from '../CreateAccount/CreateAccout'; // Import the Create Account form

const LeftSection = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const openReviewModal = () => setIsReviewModalOpen(true);
  const closeReviewModal = () => setIsReviewModalOpen(false);

  const openAccountModal = () => setIsAccountModalOpen(true);
  const closeAccountModal = () => setIsAccountModalOpen(false);

  return (
    <div className="text-center py-10">
      {/* Logo */}
      <div className="mb-6">
        <img 
          src="logo.png" 
          alt="Logo" 
          className="w-24 mx-auto" 
        />
      </div>
      
      {/* Spotlight Header */}
      <p className="text-sm font-semibold tracking-widest text-gray-500 mb-2">
        Student Says
      </p>

      {/* Main Heading */}
      <h1 className="text-4xl font-extrabold text-black mb-4">
        Discover Schools Unofficial G.C
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-500 mb-8">
        Your voice, your opinions, your experience
      </p>

      <p className="text-xl text-green-500 mb-8">
        Helping students anonymously share their thoughts
        <br /> and reviews about their schools.
      </p>

      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <button 
          className="px-6 py-2 bg-black text-white font-semibold rounded-md"
          onClick={openReviewModal} // Open Review Modal
        >
          + SUBMIT REVIEW
        </button>
        <button 
          className="px-6 py-2 border border-gray-500 text-gray-600 font-semibold rounded-md"
          onClick={openAccountModal} // Open Account Modal
        >
          CREATE STUDENT ACCOUNT
        </button>
      </div>

      {/* Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <button 
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
              onClick={closeReviewModal} // Close modal
            >
              &times;
            </button>
            <SubmitReview closeModal={closeReviewModal} />
          </div>
        </div>
      )}

      {/* Create Account Modal */}
      {isAccountModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
            <button 
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
              onClick={closeAccountModal} // Close modal
            >
              &times;
            </button>
            <CreateAccount closeModal={closeAccountModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSection;
