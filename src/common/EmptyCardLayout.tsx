import React, { ReactNode } from "react";
interface EmptyCardLayoutProps {
  children: ReactNode;
}
export function EmptyCardLayout({ children }: EmptyCardLayoutProps) {
  return (
    <div className="h-full w-full grid place-items-center">{children}</div>
  );
}
