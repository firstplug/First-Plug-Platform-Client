import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

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
