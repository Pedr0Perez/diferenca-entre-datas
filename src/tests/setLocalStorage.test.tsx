import setLocalStorage from "@/utils/localStorage/setLocalStorage";
import getLocalStorage from "@/utils/localStorage/getLocalStorage";

describe("localStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Deve salvar a chave 'temaEscuro' e o valor 'Y' criptografado no localStorage, e depois deve retornar o valor da chave 'temaEscuro' descriptografado", () => {
    setLocalStorage("temaEscuro", "Y");

    expect(getLocalStorage("temaEscuro")).toBe("Y");
  });
});
