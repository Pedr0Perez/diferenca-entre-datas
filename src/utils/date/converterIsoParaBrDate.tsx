export default function converterIsoParaBrDate(dataIso: string) {
  if (dataIso.trim() === "") return "";

  const dateObj: Date = new Date(dataIso);

  const dia = String(dateObj.getDate()).padStart(2, "0");
  const mes = String(dateObj.getMonth() + 1).padStart(2, "0");
  const ano = dateObj.getFullYear();

  return `${dia}/${mes}/${ano}`;
}
