import Link from "next/link";
import { ReactNode } from "react";

const disableVariantOptions = ["primary", "secondary", "text", "alert"] as const
const size = ["big", "small"] as const

interface CustomLinkProps  {
  href? : string,
  children?: ReactNode;
  className?: string;
  disabled?: typeof disableVariantOptions[number];
  variant?: typeof disableVariantOptions[number];
  size?: typeof size[number];
}

interface CustomLinkStyles {
  variant: {
    [key: string]: string;
  };
  size: {
    [key: string]: string;
  };
  disabled: {
    [key: string]: string;
  };
}


export default function CustomLink({
  href,
  children,
  className = "",
  disabled,
  variant,
  size,
} : CustomLinkProps) {
  const customLinkStyle: CustomLinkStyles = {
    variant: {
      primary:
        "bg-blue text-white   hover:bg-gradient-to-r from-blue to-green ",
      secondary: "bg-white border border-blue hover:bg-hoverBlue  text-blue ",
      text: "bg-white   text-blue  hover:bg-hoverBlue",
      alert: "text-error    hover:bg-hoverRed",
    },
    size: {
      big: "text-lg py-3 px-6",
      small: "text-sm  py-2 px-6",
    },
    disabled: {
      primary: "bg-light-grey    text-grey ",
      secondary: "bg-white   text-grey ",
      text: "bg-white    text-grey   ",
      alert: "bg-white   text-grey ",
    },
  };

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_black" : undefined}
      className={`text-blue font-lg font-bold font-sans ${className} ${
        disabled
          ? `${customLinkStyle.disabled[variant]} ${customLinkStyle.size[size]}`
          : `${customLinkStyle.variant[variant]} ${customLinkStyle.size[size]}`
      } `}
    >
      {children}
    </Link>
  );
}
