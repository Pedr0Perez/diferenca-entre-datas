import calcularDiferencaEntreDatasMin from "./calcularDiferencaEntreDatasMin";

export default function calcularDiferencaEntreDatasHoras(
  dataInicial: Date,
  dataFinal: Date
): number {
  return Math.ceil(calcularDiferencaEntreDatasMin(dataInicial, dataFinal) / 60);
}
