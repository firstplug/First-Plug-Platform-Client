import React from "react";

export default function Button({
  body,
  size,
  variant,
  icon,
  className,
  disabled = false,
}) {
  const btnStyle = {
    size: {
      big: "text-lg py-3 px-6",
      small: "text-sm  py-2 px-6",
    },
    variant: {
      primary:
        "bg-blue text-white   hover:bg-gradient-to-r from-blue to-green ",
      secondary: "bg-white border border-blue hover:bg-hoverBlue  text-blue ",
      text: "bg-white   text-blue  hover:bg-hoverBlue",
      alert: "text-error    hover:bg-hoverRed",
    },

    disabled: {
      primary: "bg-light-grey    text-grey ",
      secondary: "bg-white   text-grey ",
      text: "bg-white    text-grey   ",
      alert: "bg-white   text-grey ",
    },
  };

  return (
    <button
      className={`w-full text-center flex items-center justify-center gap-2 font-bold leading-5 capitalize rounded-md transition-all duration-150 ease-in ${
        disabled
          ? `${btnStyle.size[size]} ${btnStyle.disabled[variant]}`
          : ` ${btnStyle.size[size]} ${btnStyle.variant[variant]}`
      } ${className || ""} `}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {body}
    </button>
  );
}
