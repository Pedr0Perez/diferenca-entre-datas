import calcularDiferencaEntreDatasDias from "./calcularDiferencaEntreDatasDias";

export default function calcularDiferencaEntreDatasMeses(
  dataInicial: Date,
  dataFinal: Date
): number {
  return parseFloat(
    (
      calcularDiferencaEntreDatasDias(dataInicial, dataFinal) / 30.436875
    ).toFixed(2)
  );
}
