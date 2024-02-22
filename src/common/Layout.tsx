import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <section
      className={`h-auto min-h-full mx-auto    flex-grow   ${className}`}
    >
      {children}
    </section>
  );
}
