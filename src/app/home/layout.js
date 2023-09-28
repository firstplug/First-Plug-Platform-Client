import Layout from "@/common/Layout";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section className=" flex  ">
          <div>
            <Sidebar />
          </div>
          <div className="w-full">
            <Navbar />

            <Layout>{children}</Layout>
          </div>
        </section>
      </body>
    </html>
  );
}
