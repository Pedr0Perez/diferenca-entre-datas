import calcularDiferencaEntreDatasMin from "./calcularDiferencaEntreDatasMin";

export default function calcularDiferencaEntreDatasHoras(
  dataInicial: Date,
  dataFinal: Date
): number {
  return (dataFinal.getTime() - dataInicial.getTime()) / 1000 / 60 / 60;
}
