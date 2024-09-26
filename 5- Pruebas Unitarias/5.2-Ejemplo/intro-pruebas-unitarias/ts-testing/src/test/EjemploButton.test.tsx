import { fireEvent, render, screen } from "@testing-library/react";
import EjemploButton from "../components/EjemploButton";
import React from "react";

describe("Validar el Componente EjemploButton", () => {
  test("validar que correponda el nombre del boton", () => {
    render(
      <EjemploButton
        nombre="Button Nuevo"
        onClick={() => console.log("Hola")}
      />
    );
    expect(screen.getByText("Button Nuevo")).toBeInTheDocument();
  });

  test("validar que la funcion corresponda a la acción enviada", () => {
    const hacerClick = jest.fn();
    render(<EjemploButton nombre="Button Nuevo" onClick={hacerClick} />);

    fireEvent.click(screen.getByText("Button Nuevo"));

    expect(hacerClick).toHaveBeenCalledTimes(1);
  });
});
