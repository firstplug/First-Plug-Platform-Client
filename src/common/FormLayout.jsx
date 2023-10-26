import React from "react";

export default function FormLayout({ className = "", children }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>{children}</div>
  );
}