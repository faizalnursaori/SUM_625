"use client";

import { FormatTime } from "@/utils/FormatTime";
import React from "react";

export const Timer = ({ seconds, isRunning }: { seconds: number; isRunning: boolean }) => {
  const { hours, minutes, remainingSeconds } = FormatTime(seconds);

  return (
    <div className="text-xl mb-6">
      Time: {hours}h {minutes}m {remainingSeconds}s
    </div>
  );
};
