"use client";

import { BodyPart, tools } from "../data/tools";

const ToolModal = ({
  part,
  onClose,
}: {
  part: BodyPart;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md text-center space-y-4">
        <h2 className="text-2xl font-bold">{part}</h2>
        <p className="text-gray-800">{tools[part]}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ToolModal;
