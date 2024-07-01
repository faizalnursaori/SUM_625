"use client";

import { useState, useEffect } from "react";
import { useTotalSum } from "./TotalSumContext";

export const RandomNumber = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const gridSize = 25;
  const { setTotalSum } = useTotalSum();

  useEffect(() => {
    const shuffledNumbers = Array.from({ length: gridSize * gridSize }, () =>
      Math.floor(Math.random() * 10)
    );
    setNumbers(shuffledNumbers);
  }, []);

  useEffect(() => {
    const totalSum = numbers.reduce((acc, number) => acc + number, 0);
    setTotalSum(totalSum);
  });
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div
        className="grid gap-px bg-gray-300"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          width: "95vmin",
          height: "95vmin",
        }}
      >
        {numbers.map((number, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white text-xs sm:text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};
