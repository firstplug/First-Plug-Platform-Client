import Button from "@/common/Button";
import React from "react";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button size={"small"} body={"boton"} variant={"primary"} />
      <Button size={"big"} body={"boton"} variant={"secondary"} />
    </main>
  );
}
