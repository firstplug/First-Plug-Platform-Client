import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <section className={`w-[96%] flex-grow mx-auto max-h-[88vh]    `}>
      {children}
    </section>
  );
}
