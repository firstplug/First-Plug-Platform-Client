import React from "react";

export default function Button({
  body,
  size,
  variant,
  icon,
  disabled = false,
}) {
  const btnStyle = {
    size: {
      big: "text-lg",
      small: "text-sm",
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
      className={
        disabled
          ? `${btnStyle.size[size]} ${btnStyle.disabled[variant]}`
          : ` ${btnStyle.size[size]} ${btnStyle.variant[variant]}`
      }
      disabsled={disabled}
      style={{
        transition: "all .3s",
        padding: size === "small" ? "9px 24px" : "12px 24px",
        borderRadius: "8px",
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        fontWeight: 700,
        lineHeight: "22px",
        textTransform: "capitalize",
      }}
    >
      {icon && <span>{icon}</span>}
      {body}
    </button>
  );
}
