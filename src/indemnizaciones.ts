import { Global } from "./global";

/**
 * Cálculo de una indemnización en Colombia
 */
export class Indemnizacion {
  salario: number;
  contratoTipo: Global.TiposDeContrato;
  contratoInicio: Date;
  contratoTerminacion: Date;
  despido: Date;
  esPeriodoPrueba: Boolean;
  diasTrabajados: number;
  valorDiaTrabajo: number;
  indemnizacionDias: number;
  indemnizacionValor: number;
  hayDatosValidos: boolean;

  constructor(
    salario: number,
    contratoTipo: Global.TiposDeContrato,
    contratoInicio: Date,
    contratoTerminacion: Date,
    despido: Date,
    esPeriodoPrueba: Boolean
  ) {
    this.salario = salario;
    this.contratoTipo = contratoTipo;
    this.contratoInicio = contratoInicio;
    this.contratoTerminacion = contratoTerminacion;
    this.despido = despido;
    this.esPeriodoPrueba = esPeriodoPrueba;
    this.hayDatosValidos = false;
    this.indemnizacionDias = 0;
    this.indemnizacionValor = 0;
  }
}
