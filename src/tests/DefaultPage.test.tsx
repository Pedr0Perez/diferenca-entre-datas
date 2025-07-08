import DefaultPage from "@/components/layout/DefaultPage";
import { render, screen } from "@testing-library/react";

test("Renderiza o layout padrão do sistema com o parágrafo com o texto correto", () => {
  render(
    <DefaultPage>
      <p>Teste 2025</p>
    </DefaultPage>
  );
  expect(screen.getByText("Teste 2025")).toBeInTheDocument();
});
