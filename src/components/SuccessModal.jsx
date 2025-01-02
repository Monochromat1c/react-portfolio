import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-6 shadow-xl relative z-10 max-w-md w-full mx-4 transform transition-all animate-modal-in">
        <div className="text-center">
          <FaCheckCircle className="text-[#00dac4] text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#2a2943] mb-2">Message Sent Successfully!</h3>
          <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          <button
            onClick={onClose}
            className="bg-[#00dac4] text-white px-6 py-2 rounded-lg hover:bg-[#00c4b0] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
