import TypeDataInformacoes from "./types/TypeDataInformacoes";

export default function converterBrDateParaIso(data: string) {
  if (data === "") return "";

  let [dia, mes, ano] = data.split("/");

  if (!validarSeDiaMesOuAnoForamPreenchidos(dia, mes, ano)) {
    //return "";
  }

  const dataInformacoes: TypeDataInformacoes = {
    dia: Number(dia),
    mes: Number(mes),
    ano: Number(ano),
  };

  converterDataCasoNaoSejaValida(dataInformacoes);

  const dataObj: Date = new Date(
    dataInformacoes.ano,
    dataInformacoes.mes - 1,
    dataInformacoes.dia
  );

  return dataObj.toISOString();
}

function validarSeDiaMesOuAnoForamPreenchidos(
  dia: string,
  mes: string,
  ano: string
) {
  return !dia.includes("_") && !mes.includes("_") && !ano.includes("_");
}

function converterDataCasoNaoSejaValida(dataInformacoes: TypeDataInformacoes) {
  const dateObj: Date = new Date(
    dataInformacoes.ano,
    dataInformacoes.mes - 1,
    dataInformacoes.dia
  );

  if (dataInformacoes.ano < 1800) {
    dataInformacoes.ano = 1800;
  }

  if (!(dateObj.getMonth() === dataInformacoes.mes - 1)) {
    if (dataInformacoes.mes < 1) {
      dataInformacoes.mes = 1;
    }

    if (dataInformacoes.mes > 12) {
      dataInformacoes.mes = 12;
    }
  }

  if (!(dateObj.getDate() == dataInformacoes.dia)) {
    if (dataInformacoes.dia < 1) {
      dataInformacoes.dia = 1;
    }

    if (dataInformacoes.dia > 31) {
      dataInformacoes.dia = 31;
    }
  }
}
