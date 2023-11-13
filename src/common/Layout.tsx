import React, { ReactNode } from "react";

interface LayoutProps  {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children, className }: LayoutProps) {
  return (
    <section
      className={`h-[calc(98vh-100px)] w-[96%] mx-auto py-6 mt-6 ${className}`}
    >
      {children}
    </section>
  );
}