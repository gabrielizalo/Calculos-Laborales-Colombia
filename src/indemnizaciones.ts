import { Global } from "./global";
import { Mensajes } from "./mensajes";

/**
 * Cálculo de una indemnización en Colombia
 */
export class Indemnizacion {
  // region Getters and Setters
  get datosValidos(): boolean {
    return this._datosValidos;
  }

  set datosValidos(value: boolean) {
    this._datosValidos = value;
  }
  // endregion

  // region Properties
  /**
   * Datos necesarios para calcular la indeminzación
   */
  private salario: number;
  private contratoTipo: Global.TiposDeContrato;
  private contratoInicio: Date;
  private contratoTerminacion: Date;
  private despido: Date;
  private esPeriodoPrueba: Boolean;

  /**
   * ¿Con los datos suministrados se puede calcular la indemnización?
   */
  private _datosValidos: boolean;

  /**
   * Cálculo de la indemnización
   */
  private diasTrabajados: number;
  private valorDiaTrabajo: number;
  private indemnizacionDias: number;
  private indemnizacionValor: number;
  private errores: Array<string>;
  // endregion

  // region Constructor
  /**
   * Constructor de una indemnización
   * @param {number} Salario del empleado
   * @param {Global.TiposDeContrato} Tipo de contrato
   * @param {Date} Fecha de inicio del contrato
   * @param {Date} Fecha prevista de terminación (si aplica)
   * @param {Date} Fecha de despido efectivo
   * @param {Boolean} ¿El empleado se encuentra en período de prueba?
   */
  public constructor(
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
    this._datosValidos = false;
    this.indemnizacionDias = 0;
    this.indemnizacionValor = 0;
    this.errores = [];
  }
  // endregion

  // region Methods
  // region verificarDatos
  /**
   * Verificar que todos los datos están ok para hacer el cálculo de la indemnización
   */
  public verificarDatos() {
    this._datosValidos = false;
    this.errores = [];
    this.diasTrabajados = 0;
    this.valorDiaTrabajo = 0;
    this.indemnizacionDias = 0;
    this.indemnizacionValor = 0;

    // ¿Salario OK?
    if (!this.salario || typeof this.salario !== "number") {
      this.errores.push(Mensajes.Indemnizaciones.SALARIO_INVALIDO);
    } else {
      if (
        this.salario < Global.MINIMO_SALARIO_MENSUAL ||
        this.salario > Global.MAXIMO_SALARIO_MENSUAL
      ) {
        this.errores.push(Mensajes.Indemnizaciones.SALARIO_FUERA_DE_RANGO);
      }
    }

    // ¿Tipo de Contrato OK?
    if (!this.contratoTipo || !(this.contratoTipo in Global.TiposDeContrato)) {
      this.errores.push(Mensajes.Indemnizaciones.TIPO_DE_CONTRATO_INVALIDO);
    } else {
      if (
        this.contratoTipo === Global.TiposDeContrato.Aprendizaje ||
        this.contratoTipo === Global.TiposDeContrato.Ocasional ||
        this.contratoTipo === Global.TiposDeContrato.PrestacionServicios
      ) {
        this.errores.push(
          Mensajes.Indemnizaciones.TIPO_DE_CONTRATO_FUERA_DE_RANGO
        );
      }
    }

    //

    // Si no hay errores estamos ok
    if (this.errores.length === 0) {
      this._datosValidos = true;
    }
  }
  // endregion
  // endregion
}
