"use client";

import { useState, useEffect } from "react";

type ShowAnswerProps = {
  totalSum: number;
  elapsedTime: number;
};

export const ShowAnswer = ({ totalSum, elapsedTime }: ShowAnswerProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (elapsedTime >= 300) {
      setIsEnabled(true);
    }
  }, [elapsedTime]);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleShowAnswer}
        disabled={!isEnabled}
        className={`px-4 py-2 rounded ${
          isEnabled
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Show Answer
      </button>
      {showAnswer && <p className="mt-2 text-lg">The correct answer is: {totalSum}</p>}
      {!isEnabled && <></>}
    </div>
  );
};
