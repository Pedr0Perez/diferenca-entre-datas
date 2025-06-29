import calcularDiferencaEntreDatasMeses from "./calcularDiferencaEntreDatasMeses";

export default function calcularDiferencaEntreDatasAnos(
  dataInicial: Date,
  dataFinal: Date
): number {
  return parseFloat(
    (calcularDiferencaEntreDatasMeses(dataInicial, dataFinal) / 12).toFixed(2)
  );
}
