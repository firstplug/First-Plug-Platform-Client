import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "./Button";
import { AddIcon, ShopIcon, UpLoadIcon } from "./Icons";
import { CustomLink } from "./CustomLink";

type childrenTypes = "stock" | "members" | "shipments" | "orders";

interface EmptyCardProps {
  className?: string;
  imageBottom: string;
  altImage: string;
  paragraph: string;
  children: childrenTypes;
}
function EmptyCardChildren({ children }: { children: childrenTypes }) {
  switch (children) {
    case "stock":
      return (
        <div className="flex gap-2 ">
          <Button
            variant="secondary"
            body="Load Stock"
            size="big"
            icon={<UpLoadIcon />}
            className="p-3 rounded-md"
            onClick={() => {}}
          />

          <CustomLink
            variant="primary"
            size="big"
            className="rounded-md flex   gap-2"
            href="/shop"
          >
            <ShopIcon /> Shop Now
          </CustomLink>
        </div>
      );
    case "members":
      return (
        <div className="flex gap-2 ">
          <Button
            body="Load Team Members"
            icon={<AddIcon />}
            onClick={() => {}}
            variant="secondary"
            size="big"
            className="rounded-md"
          />
          <CustomLink
            variant="primary"
            size="big"
            className="rounded-md flex gap-2"
            href="home/addTeam"
          >
            <UpLoadIcon /> Add Team Memeber
          </CustomLink>
        </div>
      );

    case "shipments":
    case "orders":
      return (
        <CustomLink
          variant="primary"
          size="big"
          className="rounded-md flex gap-2"
          href="/home/orders/equipment"
        >
          <ShopIcon /> Shop Now
        </CustomLink>
      );
  }
}
export function EmptyCard({
  imageBottom,
  altImage,
  paragraph,
  children,
  className,
}: EmptyCardProps) {
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
      <EmptyCardChildren children={children} />
    </div>
  );
}
