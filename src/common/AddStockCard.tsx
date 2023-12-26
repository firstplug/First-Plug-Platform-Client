"use client";
import { IconX, FileIcon, AlertCheck } from "./Icons";

interface AddStockCardProps {
  title: string;
  file: string;
  currentDate: string;
  className?: string;
  onDeleteClick?: () => void;
  isLoading: boolean;
  uploadProgress: number;
}

export function AddStockCard({
  title,
  file,
  currentDate,
  className,
  onDeleteClick,
  isLoading,
  uploadProgress,
}: AddStockCardProps) {
  const handleDeleteClick = () => onDeleteClick?.();

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
        <button
          className="bg-transparent border-none cursor-pointer"
          onClick={handleDeleteClick}
        >
          <IconX />
        </button>
      </header>
      {isLoading && (
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-4">
          <div
            className="bg-green h-1.5 rounded-full transition-all duration-300 ease-in-out "
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
      {!isLoading && (
        <footer className="flex flex-col items-end flex-1">
          <>
            <p className="text-grey flex gap-2 items-center">
              {currentDate}
              <AlertCheck className="text-green" />
            </p>
          </>
        </footer>
      )}
    </article>
  );
}
