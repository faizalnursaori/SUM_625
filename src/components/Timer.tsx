"use client";

import { FormatTime } from "@/utils/FormatTime";
import React, { useState, useEffect } from "react";

export const Timer = ({ isRunning }: { isRunning: boolean }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const { hours, minutes, remainingSeconds } = FormatTime(seconds);

  return (
    <div className="text-xl mb-6">
      Time: {hours}h {minutes}m {remainingSeconds}s
    </div>
  );
};
