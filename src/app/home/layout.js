import Layout from "@/common/Layout";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "First-Plug-Platform",
  description:
    "Web platform focused on inventory management, acquisition and control.",
};

export default function RootLayout({ children }) {
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
