import { fireEvent, render, screen } from "@testing-library/react";
import Bienvenidos from "../../components/Bienvenidos";

describe("Validaciones en el componente de Bienvenidos", () => {
  test("Validar si se encuentra dentro de ella la palabra Bienvenido", () => {
    render(<Bienvenidos />);
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
  });

  test("Validar un nombre y que corresponda la salida", () => {
    const nombre = "Luisa";

    render(<Bienvenidos name={nombre} />);

    expect(screen.getByText(`Welcome! ${nombre}`)).toBeInTheDocument();
  });

  //------------------button
  test("Cambiar el estado del Nombre", () => {
    const nombre = "Joseph";
    render(<Bienvenidos name={nombre} />);
    const button = screen.getByRole("button", {
      name: "Cambiar el Nombre",
    });
    fireEvent.click(button);

    const otro = "Este es otro Nombre";

    expect(screen.getByText(`Welcome! ${otro}`)).toBeInTheDocument();
  });

  test("Cambiar el color de fondo del mensaje", () => {
    const nombre = "Joseph";
    render(<Bienvenidos name={nombre} />);

    const button = screen.getByRole("button", {
      name: "cambiar el Color",
    });
    fireEvent.click(button);

      expect(
        screen.getByRole("article", { name: `Welcome! ${nombre}` })
      ).toHaveStyle({ backgroundColor: "yellow" });
  });
});
