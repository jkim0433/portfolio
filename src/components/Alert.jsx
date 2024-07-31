import React from 'react';

const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-5 text-sm bg-white right-5 border border-yellow-700/20 text-stone-600 px-6 py-3 rounded-full flex items-center">
      <span className="mr-2">{message}</span>
      <button
        onClick={onClose}
        className="ml-auto text-stone-600 hover:text-yellow-600"
      >
        &times;
      </button>
    </div>
  );
};

export default Alert;
