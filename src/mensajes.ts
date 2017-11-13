import { Global } from "./global";
import { String } from "../node_modules/typescript-string-operations/source/source";

export namespace Mensajes {
  // region Indeminzaciones
  export namespace Indemnizaciones {
    export const SALARIO_INVALIDO = "El salario no es válido.";
    export const SALARIO_FUERA_DE_RANGO = String.Format(
      "El salario está fuera del rango que maneja la aplicación: ${0:n} y ${1:n}.",
      Global.MINIMO_SALARIO_MENSUAL,
      Global.MAXIMO_SALARIO_MENSUAL
    );
    export const TIPO_DE_CONTRATO_INVALIDO =
      "El tipo de contrato seleccionado no es válido.";
    export const TIPO_DE_CONTRATO_FUERA_DE_RANGO =
      "El tipo de contrato seleccionado no tiene el beneficio de indemnización.";
  }
  // endregion
}
