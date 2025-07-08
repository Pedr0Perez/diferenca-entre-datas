import converterBrDateParaIso from "@/utils/date/converterBrDateParaIso";

test("Deve retornar a mesma data recebida no formato brasileiro no formato iso", () => {
  expect(converterBrDateParaIso("01/08/2025")).toBe("2025-08-01T03:00:00.000Z");
});
