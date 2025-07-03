export default function calcularDiferencaEntreDatasSemanas(
  dataInicial: Date,
  dataFinal: Date
): number {
  const totalDias =
    (dataFinal.getTime() - dataInicial.getTime()) / 1000 / 60 / 60 / 24;

  if (dataFinal > dataInicial) {
    return Math.floor(totalDias / 7);
  }

  return Math.ceil(totalDias / 7);
}
