import { Indemnizacion } from "../src/indemnizaciones";

/**
 * Indemnizaciones tests
 */
describe("Indemnizaciones test", () => {
  it("should create an empty object with no data", () => {
    let miIndemnizacion = new Indemnizacion(null, null, null, null, null, null);
    expect(miIndemnizacion.datosValidos).toBeFalsy();
  });
});
