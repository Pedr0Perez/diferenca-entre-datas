import converterIsoParaBrDate from "@/utils/date/converterIsoParaBrDate";

test("Deve retornar a data no formato dd/mm/yyyy", () => {
  expect(converterIsoParaBrDate("2003-08-11T03:00:00.000Z")).toBe(
    "11/08/2003"
  );
});
