"use client";
import React, { useState, useEffect } from "react";

type ProgressBarProps = {
  onComplete: () => void;
};

export function ProgressBar({ onComplete }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  // TODO: Ver como implementar la carga de los archivos y su  porcentaje

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
