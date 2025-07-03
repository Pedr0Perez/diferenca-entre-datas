export default function calcularDiferencaEntreDatasAnos(
  dataInicial: Date,
  dataFinal: Date
): number {
  let anos = dataFinal.getFullYear() - dataInicial.getFullYear();

  if (
    dataFinal.getDate() < dataInicial.getDate()  &&
    dataFinal.getMonth() === dataInicial.getMonth() 
    && dataFinal.getFullYear() > dataInicial.getFullYear()
  ) {
    anos--;
  }

  if (
    dataFinal.getDate() > dataInicial.getDate()  &&
    dataFinal.getMonth() === dataInicial.getMonth() 
    && dataFinal.getFullYear() < dataInicial.getFullYear()
  ) {
    anos++;
  }

  return anos;
}
