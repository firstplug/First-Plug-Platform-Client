import React, { ReactNode } from "react";

interface FormLayoutProps {
className?: string;
children: ReactNode;
}

export default function FormLayout({ className, children }: FormLayoutProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>{children}</div>
  );
}
