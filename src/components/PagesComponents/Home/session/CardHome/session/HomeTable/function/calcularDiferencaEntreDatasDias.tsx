import calcularDiferencaEntreDatasHoras from "./calcularDiferencaEntreDatasHoras";

export default function calcularDiferencaEntreDatasDias(
  dataInicial: Date,
  dataFinal: Date
): number {
  return calcularDiferencaEntreDatasHoras(dataInicial, dataFinal) / 24;
}
