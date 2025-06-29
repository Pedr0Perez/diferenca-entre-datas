import calcularDiferencaEntreDatasSeg from "./calcularDiferencaEntreDatasSeg";

export default function calcularDiferencaEntreDatasMinutos(
  dataInicial: Date,
  dataFinal: Date
): number {
  return calcularDiferencaEntreDatasSeg(dataInicial, dataFinal) / 60;
}
