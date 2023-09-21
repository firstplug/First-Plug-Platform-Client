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
    <html lang="en" className={``}>
      <body>
        <section className=" flex max-h-[100vh] ">
          <div>
            <Sidebar />
          </div>
          <div className="w-full">
            <Navbar title={"hola"} />

            <Layout className="m-10 ">{children}</Layout>
          </div>
        </section>
        {/* {children} */}
      </body>
    </html>
  );
}
