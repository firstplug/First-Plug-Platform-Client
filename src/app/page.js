import Button from "@/common/Button";
import Aside from "@/components/Aside";
import ColaboratorCard from "@/components/ColaboratorCard";
import MemberDetails from "@/components/MemberDetails";
import React from "react";
export default function Home() {
  const teams = ["Finance", "HR", "Dev", "Finance", "Design", "Sales"];
  const array = [
    {
      id: "#001",
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
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button body={"show"} variant={"primary"} size={"big"} />
      <Aside isActive={true} title={`Team Member ${array[0].id}`}>
        <MemberDetails {...array[0]} />
      </Aside>
    </main>
  );
}
