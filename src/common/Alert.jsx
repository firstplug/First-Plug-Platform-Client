import React from "react";
import { IconX, AlertCheck } from "./Icons";

export default function Alert({ msg }) {
  return (
    <main
      className="w-100 bg-white font-sans align-text-center"
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          right: "0",
        }}
      >
        <IconX />
      </div>
      <AlertCheck />

      <div>
        <h1>Congratulations!</h1>
        <p>{msg} </p>
      </div>
    </main>
  );
}
