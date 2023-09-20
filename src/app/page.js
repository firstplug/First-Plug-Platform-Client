import Navbar from "@/components/Navbar";
import React from "react";
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Navbar />
      <Navbar
        title={"My Stock"}
        searchInput={true}
        placeholder={"Search by Category, Name or Serial"}
      />
      <Navbar
        title={"My Team"}
        searchInput={true}
        placeholder={"Search by Team, Name or ID Number "}
      />
      <Navbar
        title={"Orders"}
        searchInput={true}
        placeholder={"Search by Order Number "}
      />
      <Navbar title={"Shipments"} />
    </main>
  );
}
