export default function calcularDiferencaEntreDatasMs(
  dataInicial: Date,
  dataFinal: Date
): number {
  return Math.abs(dataFinal.getTime() - dataInicial.getTime());
}
