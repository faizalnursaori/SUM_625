"use client";

import { useState } from "react";
import { FieldAnswer } from "@/components/FieldAnswer";
import { RandomNumber } from "@/components/RandomNumber";
import { Timer } from "@/components/Timer";
import { TotalSumProvider } from "@/components/TotalSumContext";

export default function Page() {
  const [isRunning, setIsRunning] = useState(true);

  return (
    <TotalSumProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Sum 625</h1>
        <Timer isRunning={isRunning} />
        <RandomNumber />
        <FieldAnswer setIsRunning={setIsRunning} />
      </div>
    </TotalSumProvider>
  );
}
