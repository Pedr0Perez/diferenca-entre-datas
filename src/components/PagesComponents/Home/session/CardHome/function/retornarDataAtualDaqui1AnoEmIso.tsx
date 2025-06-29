import converterDateTimeParaIso from "@/utils/date/converterDateTimeParaIso";
import zerarHoraDateTime from "@/utils/date/zerarHoraDateTime";

export default function retornarDataAtualDaqui1AnoEmIso(): string {
  const date1YearFromNow: Date = new Date();
  zerarHoraDateTime(date1YearFromNow);
  date1YearFromNow.setFullYear(date1YearFromNow.getFullYear() + 1);

  return converterDateTimeParaIso(date1YearFromNow);
}
