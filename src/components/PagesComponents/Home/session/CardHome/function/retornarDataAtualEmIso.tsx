import converterDateTimeParaIso from "@/utils/date/converterDateTimeParaIso";

export default function retornarDataAtualEmIso() {
  return converterDateTimeParaIso(new Date());
}
