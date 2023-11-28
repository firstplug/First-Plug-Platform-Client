import { ReactNode } from "react";
import { Navbar, Sidebar } from "@/components";
import Aside from "@/components/Aside";

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
