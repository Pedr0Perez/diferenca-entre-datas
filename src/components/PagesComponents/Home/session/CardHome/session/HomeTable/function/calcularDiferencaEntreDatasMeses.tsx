export default function calcularDiferencaEntreDatasMeses(
  dataInicial: Date,
  dataFinal: Date
): number {
  const anos = dataFinal.getFullYear() - dataInicial.getFullYear();

  const meses = dataFinal.getMonth() - dataInicial.getMonth();

  let totalMeses = anos * 12 + meses;

  if (dataFinal.getDate() < dataInicial.getDate()) {
    totalMeses--;
  }

  return totalMeses;
}
