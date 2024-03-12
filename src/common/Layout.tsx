import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <section className={`   flex-grow p-4 `}>{children}</section>;
}
