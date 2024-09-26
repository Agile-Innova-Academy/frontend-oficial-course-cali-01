import React from "react";

type ButtonProps = {
  nombre: string;
  onClick: () => void;
};

const EjemploButton: React.FC<ButtonProps> = ({ nombre, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{nombre}</button>
    </div>
  );
};

export default EjemploButton;
