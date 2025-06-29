"use client";

import React, { memo, useEffect, useState } from "react";
import DefaultTable from "@/components/Default/DefaultTable";
import { Column } from "primereact/column";
import TypeDadosCalculados from "./types/TypeDadosCalculados";
import TypeRelactionCalculatedDataXFunction from "./types/TypeRelactionCalculatedDataXFunction";
import TypeHomeTable from "./types/TypeHomeTable";
import relactionCalculatedDataXFunctionData from "./data/relactionCalculatedDataXFunctionData";
import propertyCalculatedData from "./data/propertyCalculatedData";
import returnCalculatedDataData from "./function/returnCalculatedDataData";
import percorrerListaDePropriedadesEInserirDados from "./function/percorrerListaDePropriedadesEInserirDados";

const HomeTable = ({ dateData, counter }: TypeHomeTable) => {
  const [calculatedData, setCalculatedData] = useState<
    Array<TypeDadosCalculados>
  >([]);

  const calcularDados = (): void => {
    const data = returnCalculatedDataData();
    const clonedData = { ...data };

    const calculatedDataToUpdate: Array<TypeDadosCalculados> = [clonedData];

    percorrerListaDePropriedadesEInserirDados(dateData, calculatedDataToUpdate);

    setCalculatedData([...calculatedDataToUpdate]);
  };

  useEffect(() => {
    if (counter !== 0) {
      calcularDados();
    }
  }, [counter]);

  return (
    <DefaultTable paginator={false} value={calculatedData}>
      <Column
        body={(data) =>
          `${data.daysNumber.toLocaleString("pt-br")} ${
            data.daysNumber === 1 ? "dia" : "dias"
          }`
        }
        header="N° de dias"
      ></Column>
      <Column
        body={(data) =>
          `${data.weeksNumber.toLocaleString("pt-br")} ${
            data.weeksNumber === 1 ? "semana" : "semanas"
          }`
        }
        header="N° de semanas"
      ></Column>
      <Column
        body={(data) =>
          `${data.monthsNumber.toLocaleString("pt-br")} ${
            data.monthsNumber === 1 ? "mês" : "meses"
          }`
        }
        header="N° de meses"
      ></Column>
      <Column
        body={(data) =>
          `${data.yearsNumber.toLocaleString("pt-br")} ${
            data.yearsNumber === 1 ? "ano" : "anos"
          }`
        }
        header="N° de anos"
      ></Column>
    </DefaultTable>
  );
};

export default memo(HomeTable);
