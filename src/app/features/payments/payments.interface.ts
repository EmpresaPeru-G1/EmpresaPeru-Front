export interface IPDPRequest {
  tipoDeTasa: string;
  valorTasaEfectiva: number;
  tipoTasaEfectiva: string;
  valorTasaNominal: number;
  tipoTasaNominal: string;
  frecuenciaCapitalizacionDias: number;
  precioVenta: number;
  porcentajeCuotaInicial: number;
  numeroAnios: number;
  tipoPeriodoGracia: string;
  cantidadPeriodoGracia: number;
  tasaSeguroDesgravamen: number;
  tasaSeguroTodoRiesgo: number;
  gastosAdministrativos: number;
  portes: number;
  comisionPeriodica: number;
  costosNotariales: number;
  registrales: number;
}

export interface IPDPResponse {
  nroCuota: number
  tea: number
  tep: number
  saldoInicial: number
  intereses: number
  cuota: number
  amortizacion: number
  seguroDegravamen: number
  seguroTodoRiesgo: number
  gastosAdministrativos: number
  comisionPeriodica: number
  portes: number
  saldoFinalPeriodo: number
}
