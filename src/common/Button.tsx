"use client";

import { MouseEvent, ReactNode } from "react";

const buttonVarianProps = ["primary", "secondary", "delete", "text", "alert"] as const
const sizeVariantProps = ["big", "small"] as const

interface ButtonProps  {
  body?: ReactNode;
  variant?: typeof buttonVarianProps[number];
  icon?: JSX.Element
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  size?: typeof sizeVariantProps[number];
  children?: ReactNode;
};

export default function Button({
  body,
  variant,
  icon,
  className,
  disabled = false,
  onClick,
  size,
  children,
  ...buttonProps
} : ButtonProps ) {
  const btnStyle = {
    variant: {
      primary:
        "bg-blue text-white   hover:bg-gradient-to-r from-blue to-green ",
      secondary: "bg-white border border-blue hover:bg-hoverBlue  text-blue ",
      delete: "bg-white border border-red-500 hover:bg-hoverRed  text-red-500 ",
      text: "bg-white   text-blue  hover:bg-hoverBlue",
      alert: "text-error    hover:bg-hoverRed",
    },
    size: {
      big: "text-lg py-3 px-6",
      small: "text-sm  py-2 px-6",
    },
    disabled: {
      primary: "bg-light-grey    text-grey ",
      delete: "bg-light-grey    text-grey ",

      secondary: "bg-white   text-grey ",
      text: "bg-white    text-grey   ",
      alert: "bg-white   text-grey ",
    },
  };

  return (
    <button
      onClick={onClick}
      className={`text-center flex items-center justify-center  gap-2 font-bold leading-5 capitalize transition-all duration-150 ease-in ${
        disabled
          ? `${btnStyle.disabled[variant]} ${btnStyle.size[size]}`
          : `${btnStyle.variant[variant]} ${btnStyle.size[size]}`
      } ${className || ""} `}
      {...buttonProps}
      disabled={disabled}
    >
      {children ? (
        children
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {body}
        </>
      )}
    </button>
  );
}
