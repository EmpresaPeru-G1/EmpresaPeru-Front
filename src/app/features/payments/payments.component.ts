import { Component, OnInit } from '@angular/core';
import { PaymentsService } from './payments.service';
import { IPDPRequest, IPDPResponse } from './payments.interface';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  dataSource: IPDPResponse[] = [];
  numAnios = 1;
  displayedColumns: string[] = ['nroCuota', 'tea', 'tep', 'saldoInicial', 'intereses', 'cuota', 'amortizacion', 'seguroDegravamen', 'seguroTodoRiesgo', 'gastosAdministrativos', 'comisionPeriodica', 'portes', 'saldoFinalPeriodo'];
  showForm = true;
  showMenu: boolean = false;
  isAuth: boolean = false;

  constructor(
    private paymentsService: PaymentsService
  ) { }

  ngOnInit(): void { }

  generatePDP(event: IPDPRequest): void {
    console.log(event);
    if (event) this.showForm = false;
    const request: IPDPRequest = {
      tipoDeTasa: event.tipoDeTasa,//"E",
      valorTasaEfectiva: event.valorTasaEfectiva,// 0.08,
      tipoTasaEfectiva: event.tipoTasaEfectiva,// "TEM",
      valorTasaNominal: event.valorTasaNominal,// 0.0,
      tipoTasaNominal: event.tipoTasaNominal,// "",
      frecuenciaCapitalizacionDias: event.frecuenciaCapitalizacionDias,// 0,
      precioVenta: event.precioVenta,// 10000.0,
      porcentajeCuotaInicial: event.porcentajeCuotaInicial,// 0.20,
      numeroAnios: event.numeroAnios,// this.numAnios,
      tipoPeriodoGracia: event.tipoPeriodoGracia,// "P",
      cantidadPeriodoGracia: event.cantidadPeriodoGracia,// 2,
      tasaSeguroDesgravamen: event.tasaSeguroDesgravamen,// 0.0005,
      tasaSeguroTodoRiesgo: event.tasaSeguroTodoRiesgo,// 0.0006,
      gastosAdministrativos: event.gastosAdministrativos,// 10,
      portes: event.portes,// 20,
      comisionPeriodica: event.comisionPeriodica,// 30,
      costosNotariales: event.costosNotariales,// 40,
      registrales: event.registrales,// 50
    }
    this.paymentsService.generatePDP(request).subscribe(response => {
      this.dataSource = [...response].slice(response.length - (12 * this.numAnios), response.length);
      console.log(this.dataSource);
    });
  }

  logout(): void {

  }
}
