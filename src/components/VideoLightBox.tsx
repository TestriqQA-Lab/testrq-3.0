// components/Lightbox.tsx

import React from "react";

interface LightboxProps {
  isOpen: boolean;
  videoLink: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-xl flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
          <p className="text-lg text-gray-600 mb-6">
            The demo video is coming soon. Stay tuned!
          </p>
          <button
            onClick={onClose}
            className="bg-blue-500 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
