import converterDateTimeParaIso from "@/utils/date/converterDateTimeParaIso";

test("Deve retornar a mesma data recebida no formato iso", () => {
  const data: Date = new Date(2025, 2, 1);

  expect(converterDateTimeParaIso(data)).toBe("2025-03-01T03:00:00.000Z");
});
