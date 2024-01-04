import React from 'react';

const Modal = ({ isOpen, toggleModal, videoLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-black p-6 rounded-lg max-w-3xl w-full">
        <button className="absolute top-2 right-2 text-gray-600" onClick={toggleModal}>
          Close
        </button>
        <div className="w-full h-96 relative">
          <video controls className="w-full h-full rounded-lg absolute top-0 left-0">
            <source src={videoLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Modal;
