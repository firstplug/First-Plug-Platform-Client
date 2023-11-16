"use client";
import { useState } from "react";
import { IconX, FileIcon, AlertCheck } from "./Icons";
import {ProgressBar} from "./ProgressBar";

interface AddStockCardProps  {
  title: string;
  file: string;
  currentDate: string;
  className?: string;
}

export function AddStockCard({ title, file, currentDate, className } : AddStockCardProps) {
  const [showProgress, setShowProgress] = useState<Boolean>(true);


  const handleProgressComplete = () => {
    setShowProgress(false);
  };

  return (
    <article
      className={`flex flex-col ${
        className || ""
      } bg-white p-4 rounded-md shadow-md `}
    >
      <header className="flex items-center justify-between">
        <div className="flex">
          <div className="flex gap-2">
            <FileIcon />
            <div className="flex-col">
              <h2 className="font-bold text-black">{title}</h2>
              <p className="text-grey">{file}</p>
            </div>
          </div>
        </div>
        <button className="bg-transparent border-none cursor-pointer">
          <IconX />
        </button>
      </header>
      <footer className="flex flex-col items-end flex-1">
        {showProgress ? (
          <div className="w-full relative bottom-0">
            <ProgressBar onComplete={handleProgressComplete} />
          </div>
        ) : (
          <>
            <p className="text-grey flex gap-2 items-center">
              {currentDate}
              <AlertCheck className="text-green" />
            </p>
          </>
        )}
      </footer>
    </article>
  );
}
