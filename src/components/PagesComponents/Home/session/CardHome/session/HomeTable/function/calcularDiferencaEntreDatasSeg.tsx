import calcularDiferencaEntreDatasMs from "./calcularDiferencaEntreDatasMs";

export default function calcularDiferencaEntreDatasSeg(
  dataInicial: Date,
  dataFinal: Date
): number {
  return calcularDiferencaEntreDatasMs(dataInicial, dataFinal) / 1000;
}
