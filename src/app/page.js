import Button from "@/common/Button";
import React from "react";
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div>
        <Button
          body={"BTN"}
          icon={"icon"}
          className="flex bg-slate-300 gap-3  "
        />
      </div>
    </main>
  );
}
