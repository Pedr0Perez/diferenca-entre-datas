import calcularDiferencaEntreDatasAnos from "../function/calcularDiferencaEntreDatasAnos";
import calcularDiferencaEntreDatasDias from "../function/calcularDiferencaEntreDatasDias";
import calcularDiferencaEntreDatasMeses from "../function/calcularDiferencaEntreDatasMeses";
import calcularDiferencaEntreDatasSemanas from "../function/calcularDiferencaEntreDatasSemanas";
import TypeRelactionCalculatedDataXFunction from "../types/TypeRelactionCalculatedDataXFunction";

const relactionCalculatedDataXFunctionData: TypeRelactionCalculatedDataXFunction =
  {
    daysNumber: calcularDiferencaEntreDatasDias,
    weeksNumber: calcularDiferencaEntreDatasSemanas,
    monthsNumber: calcularDiferencaEntreDatasMeses,
    yearsNumber: calcularDiferencaEntreDatasAnos,
  };

export default relactionCalculatedDataXFunctionData;
