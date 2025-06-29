export default function zerarHoraDateTime(dataAtual: Date): void {
  dataAtual.setHours(0);
  dataAtual.setMinutes(0);
  dataAtual.setSeconds(0);
  dataAtual.setMilliseconds(0);
}
