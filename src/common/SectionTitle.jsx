import React from "react";

export default function SectionTitle({ className = "", children }) {
  return (
    <p
      className={`font-inter text-black font-bold text-[16px] mt-[16px] mb-[16px] ${className}`}
    >
      {children}
    </p>
  );
}