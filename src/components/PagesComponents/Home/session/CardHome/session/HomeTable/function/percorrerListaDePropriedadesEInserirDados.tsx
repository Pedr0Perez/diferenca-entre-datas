import TypeDadosCalculados from "../types/TypeDadosCalculados";
import TypeRelactionCalculatedDataXFunction from "../types/TypeRelactionCalculatedDataXFunction";
import relactionCalculatedDataXFunctionData from "../data/relactionCalculatedDataXFunctionData";
import propertyCalculatedData from "../data/propertyCalculatedData";
import TypeDateDate from "../../../types/TypeDateData";

export default function percorrerListaDePropriedadesEInserirDados(
  dateData: TypeDateDate,
  calculatedDataToUpdate: Array<TypeDadosCalculados>
): void {
  const relactionCalculatedDataXFunction: TypeRelactionCalculatedDataXFunction =
    relactionCalculatedDataXFunctionData;

  for (const property of propertyCalculatedData) {
    const func =
      relactionCalculatedDataXFunction[
        property as keyof TypeRelactionCalculatedDataXFunction
      ];

    calculatedDataToUpdate[0][property as keyof TypeDadosCalculados] = func(
      new Date(dateData.startDate),
      new Date(dateData.endDate)
    );
  }
}
