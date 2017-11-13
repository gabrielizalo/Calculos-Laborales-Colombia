export namespace Global {
  // region Enums
  /**
   * Formas de contratación en Colombia
   */
  export enum TiposDeContrato {
    TerminoFijo = "Contrato a Término Fijo",
    TerminoIndefinido = "Contrato a Término Indefinido",
    ObraLabor = "Contrato por Duración de Obra o Labor Contratada",
    PrestacionServicios = "Contrato Civil por Prestación de Servicios",
    Aprendizaje = "Contrato de Aprendizaje",
    Ocasional = "Contrato Ocasional de Trabajo"
  }
  // endregion

  // region Constants
  export const MINIMO_SALARIO_MENSUAL = 100000;
  export const MAXIMO_SALARIO_MENSUAL = 999999999;
  // endregion
}
