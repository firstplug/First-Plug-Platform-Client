import ColaboratorCard from "@/components/ColaboratorCard";
import Sidebar from "@/components/Sidebar";
import React from "react";

const array = [
  {
    name: "Francisco",
    lastName: "Villanueva",
    jobPosition: "Junior Dev",
    products: ["mac", "phone"],
    shimentsDetails: "incomplete",
    team: "dev",
  },
  {
    name: "Esteban",
    lastName: "Rodriguez",
    jobPosition: "Sernio Dev",
    products: ["mac", "phone", "monitor"],
    shimentsDetails: "complete",
    team: "dev",
  },

  {
    name: "Agustin",
    lastName: "Sandoval",
    jobPosition: "Sernio Dev",
    products: ["mac", "phone"],
    shimentsDetails: "complete",
    team: "finance",
  },

  {
    name: "Braian",
    lastName: "Barrientos",
    jobPosition: "Desing",
    products: ["mac", "phone", "monitor"],
    shimentsDetails: "incomplete",
    team: "desing",
  },
];
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {array.map((m) => (
        <ColaboratorCard {...m} />
      ))}
    </main>
  );
}
