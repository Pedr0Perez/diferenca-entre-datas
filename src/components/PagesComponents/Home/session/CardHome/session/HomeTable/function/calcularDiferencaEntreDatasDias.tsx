export default function calcularDiferencaEntreDatasDias(
  dataInicial: Date,
  dataFinal: Date
): number {
  return (dataFinal.getTime() - dataInicial.getTime()) / 1000 / 60 / 60 / 24;
}
