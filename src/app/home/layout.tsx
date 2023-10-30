import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}


export default function RootLayout({ children } : RootLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full">
        <Navbar />

        {children}
      </div>
    </div>
  );
}
