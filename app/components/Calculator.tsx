"use client";
import { useState } from "react";

export function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | number>("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(input));
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="max-w-xs mx-auto bg-[var(--app-card-bg)] rounded-xl p-4 shadow-lg">
      <div className="mb-2 text-right text-lg font-mono min-h-8">{input || "0"}</div>
      <div className="mb-2 text-right text-xl font-bold min-h-8">{result !== "" ? result : ""}</div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((val) =>
          val === "=" ? (
            <button key={val} className="col-span-1 bg-[var(--app-accent)] text-white rounded p-2" onClick={handleCalculate}>=</button>
          ) : (
            <button key={val} className="col-span-1 bg-[var(--app-gray)] rounded p-2" onClick={() => handleClick(val)}>{val}</button>
          )
        )}
        <button className="col-span-4 bg-red-200 rounded p-2 mt-2" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}