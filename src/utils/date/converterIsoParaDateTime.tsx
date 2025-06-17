export default function converterIsoParaDateTime(
  value: string | null
): Date | null {
  if (value === "" || value === null) return null;

  const data: Date = new Date(value!);

  return data;
}
