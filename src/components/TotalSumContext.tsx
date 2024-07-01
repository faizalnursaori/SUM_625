"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface TotalSumContextType {
  totalSum: number;
  setTotalSum: React.Dispatch<React.SetStateAction<number>>;
}

const TotalSumContext = createContext<TotalSumContextType | undefined>(undefined);

export const TotalSumProvider = ({ children }: { children: ReactNode }) => {
  const [totalSum, setTotalSum] = useState(0);

  return (
    <TotalSumContext.Provider value={{ totalSum, setTotalSum }}>
      {children}
    </TotalSumContext.Provider>
  );
};

export const useTotalSum = () => {
  const context = useContext(TotalSumContext);
  if (context === undefined) {
    throw new Error("useTotalSum must be used within a TotalSumProvider");
  }
  return context;
};
