import React from "react";

export default function Button({ body, size, variant, icon }) {
  const className = {
    big: {
      primary: "bg-blue text-white text-lg",
      scondary: "bg-white  border-blue  text-blue text-lg",
      text: "bg-white   text-blue text-lg",
      alert: "text-error   text-lg",
    },
    small: {
      primary: "bg-blue text-white text-md",
      scondary: "bg-white  border-blue  text-blue text-md",
      text: "bg-white   text-blue text-md",
      alert: "text-error   text-md",
    },
  };
  return (
    <button
      className={className[size][variant]}
      style={{
        padding: size === "small" ? "9px 24px" : "12px 24px",
        borderRadius: "8px",
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        fontWeight: 700,
        lineHeight: "22px",
      }}
    >
      <span>{icon}</span>
      {body}
    </button>
  );
}
