export default function converterDateTimeParaIso(value: Date | null): string {
  if (value === null) return "";

  return value.toISOString();
}
