import React from "react";
import Alert from "../common/Alert";
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Alert title={"Congratulations!"} msg={"menas"} />
    </main>
  );
}
