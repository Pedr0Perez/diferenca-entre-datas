import converterIsoParaDateTime from "@/utils/date/converterIsoParaDateTime";

test("Deve retornar a mesma data recebida no formato e tipo Date", () => {
  const esperado = new Date(2025, 0, 12);

  expect(converterIsoParaDateTime("2025-01-12T03:00:00.000Z")).toStrictEqual(
    esperado
  );
});
