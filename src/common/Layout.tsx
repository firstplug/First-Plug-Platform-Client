import React, { ReactNode } from "react";

interface LayoutProps  {
  children: ReactNode;
  className?: string;
};

export function Layout({ children, className }: LayoutProps) {
  return (
    <section
      className={`h-auto w-[96%] mx-auto py-6 mt-2 ${className}`}
    >
      {children}
    </section>
  );
}