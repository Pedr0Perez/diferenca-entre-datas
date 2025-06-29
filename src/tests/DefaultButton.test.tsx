import { render, screen } from "@testing-library/react";
import DefaultButton from "../components/Default/DefaultButton";

test("Renderiza o botão com o texto correto", () => {
  render(<DefaultButton label="Clicar" />);
  expect(screen.getByText("Clicar")).toBeInTheDocument();
});
