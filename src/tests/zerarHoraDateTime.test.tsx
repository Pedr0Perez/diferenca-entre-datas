import zerarHoraDateTime from "@/utils/date/zerarHoraDateTime";

test("Deve zerar as horas, minutos, segundos e milissegundos da variável que recebe uma data", () => {
  const dataRecebida = new Date(2025, 0, 1, 3, 59, 22, 242);

  const dataEsperada = new Date(2025, 0, 1);

  zerarHoraDateTime(dataRecebida);

  expect(dataRecebida).toStrictEqual(dataEsperada);
});
