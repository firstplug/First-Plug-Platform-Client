import React from "react";

export default function FormatedDate({ date }: { date: string }) {
  console.log();
  const dateFormat = date ? new Date(date) : null;

  return (
    <span className="text-md font-semibold">
      {dateFormat ? dateFormat.toLocaleDateString("es-AR") : "-"}
    </span>
  );
}
