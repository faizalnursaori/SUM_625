import React from "react";

type HowToPlayModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">How to Play</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Sum all the numbers.</li>
          <li>The goal is to reach a total sum of 625.</li>
          <li>You can sum horizontally, vertically, or in any pattern.</li>
          <li>You can show the answer when the timer reaches 5 minutes.</li>
          <li>Clicking &quot;Show Answer&quot; means you give up.</li>
        </ol>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};
