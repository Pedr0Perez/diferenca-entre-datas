import calcularDiferencaEntreDatasDias from "./calcularDiferencaEntreDatasDias";

export default function calcularDiferencaEntreDatasSemanas(
  dataInicial: Date,
  dataFinal: Date
): number {
  return parseFloat((calcularDiferencaEntreDatasDias(dataInicial, dataFinal) / 7).toFixed(2));
}
