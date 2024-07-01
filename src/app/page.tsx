"use client";

import { useState, useEffect } from "react";
import { FieldAnswer } from "@/components/FieldAnswer";
import { RandomNumber } from "@/components/RandomNumber";
import { Timer } from "@/components/Timer";
import { TotalSumProvider } from "@/components/TotalSumContext";
import { HowToPlayModal } from "@/components/Modal";
export default function Page() {
  const [isRunning, setIsRunning] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <TotalSumProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Extreme Addition</h1>
        <Timer seconds={seconds} isRunning={isRunning} />
        <button onClick={() => setIsModalOpen(true)} className="font-semibold hover:underline">
          How to Play?
        </button>
        <RandomNumber />
        <FieldAnswer setIsRunning={setIsRunning} elapsedTime={seconds} />
        <HowToPlayModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </TotalSumProvider>
  );
}
