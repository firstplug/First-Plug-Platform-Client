"use client";
import React, { useState, useEffect } from "react";

type ProgressBarProps = {
  onComplete: () => void;
};

export function ProgressBar({ onComplete }: ProgressBarProps) {
  // TODO: We need add logic to update csv file

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(interval);
        onComplete();
        return prevProgress;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex items-center gap-2">
      <div className="w-full h-4 bg-gray-200 rounded-lg">
        <div
          className="h-full bg-green rounded-lg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div>{progress}%</div>
    </div>
  );
}
