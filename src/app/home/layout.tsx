import { ReactNode } from "react";
import { Aside, Navbar, Sidebar } from "@/components";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full">
        <Navbar />

        {children}
        <Aside />
      </div>
    </div>
  );
}
