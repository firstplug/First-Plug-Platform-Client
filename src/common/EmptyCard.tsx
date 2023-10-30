import Image from "next/image";
import { ReactNode } from "react";

interface EmptyCardProps  {
  className?: string;
  imageBottom: string;
  altImage: string;
  paragraph: string;
  children: ReactNode
}

export default function EmptyCard({
  imageBottom,
  altImage,
  paragraph,
  children,
  className,
} : EmptyCardProps) {
  return (
    <div className={`${className || ""} flex flex-col items-center gap-3 `}>
      <div className="flex flex-col items-center">
        {imageBottom && (
          <div className="w-52 h-52 relative">
            <Image src={imageBottom} alt={altImage} fill />
          </div>
        )}
        <p className="text-dark-grey">{paragraph}</p>
      </div>
      {children && children}
    </div>
  );
}
