import converterDateTimeParaIso from "@/utils/date/converterDateTimeParaIso";
import zerarHoraDateTime from "@/utils/date/zerarHoraDateTime";

export default function retornarDataAtualEmIso() {
  const dataAtual: Date = new Date();
  zerarHoraDateTime(dataAtual);

  return converterDateTimeParaIso(dataAtual);
}
