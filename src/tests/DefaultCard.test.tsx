import DefaultCard from "@/components/Default/DefaultCard";
import { render, screen } from "@testing-library/react";

test("Renderiza o card utilizado para destacar o título da página com o texto correto", () => {
  render(<DefaultCard title="Página 123"></DefaultCard>);
  expect(screen.getByText("Página 123")).toBeInTheDocument();
});
