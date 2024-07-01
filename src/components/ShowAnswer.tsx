import { useState } from "react";

export const ShowAnswer = ({ totalSum }: { totalSum: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div className="text-center mt-4">
      <button onClick={handleClick} className="bg-red-500 text-white p-2 rounded">
        Show Answer
      </button>
      {isVisible && <p className="mt-2 text-xl text-blue-500">{totalSum}</p>}
    </div>
  );
};
