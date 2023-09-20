import React from "react";

export default function Button({ body, className, icon }) {
  //CREAR UN IF O ALGO PARA LAS CLASES O ESTILOS
  return (
    <button
      className={className}
      style={{
        padding: "9px 24px",
        borderRadius: "8px",
        width: "100%",
        textAlign: "center",
      }}
    >
      {icon}
      {body}
    </button>
  );
}
