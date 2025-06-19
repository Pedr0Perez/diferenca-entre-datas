import converterDateTimeParaIso from "@/utils/date/converterDateTimeParaIso";

export default function retornarDataAtualDaqui1AnoEmIso(): string {
  const date1YearFromNow = new Date();
  date1YearFromNow.setFullYear(date1YearFromNow.getFullYear() + 1);

  return converterDateTimeParaIso(date1YearFromNow);
}
