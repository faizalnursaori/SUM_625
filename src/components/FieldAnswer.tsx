"use client";

import { useState } from "react";
import { useTotalSum } from "./TotalSumContext";
import { ShowAnswer } from "./ShowAnswer";

type FieldAnswerProps = {
  setIsRunning: (value: boolean) => void;
};

export const FieldAnswer = ({ setIsRunning }: FieldAnswerProps) => {
  const { totalSum } = useTotalSum();
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    const correct = parseInt(answer) === totalSum;
    setMessage(correct ? "Jawaban anda benar" : "Jawaban anda salah");
    setIsCorrect(correct);
    if (correct) {
      setIsRunning(false);
    }
  };

  return (
    <div className="text-center">
      <input
        type="text"
        placeholder="Answer..."
        value={answer}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <button onClick={handleSubmit} className="ml-2 bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
      {message && (
        <p className={`mt-4 text-xl ${isCorrect ? "text-green-500" : "text-red-500"}`}>{message}</p>
      )}
      <ShowAnswer totalSum={totalSum} />
    </div>
  );
};
