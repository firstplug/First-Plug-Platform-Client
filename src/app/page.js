import Button from "@/common/Button";

import React from "react";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        size={"big"}
        body={"button"}
        variant={"primary"}
        // disabled={true}
      />
      <Button
        size={"big"}
        body={"button"}
        variant={"secondary"}
        // disabled={true}
      />{" "}
      <Button size={"big"} body={"button"} variant={"text"} disabled={false} />
      <Button size={"big"} body={"button"} variant={"alert"} disabled={false} />
    </main>
  );
}
