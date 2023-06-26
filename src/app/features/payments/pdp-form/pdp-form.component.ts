import { Component, EventEmitter, Output } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { IPDPRequest } from '../payments.interface';

interface TypeSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pdp-form',
  templateUrl: './pdp-form.component.html',
  styleUrls: ['./pdp-form.component.scss']
})
export class PdpFormComponent {

  formGroup: FormGroup;
  @Output() formData: EventEmitter<IPDPRequest> = new EventEmitter<IPDPRequest>();

  typeRateE: TypeSelect[] = [
    { value: 'TEA', viewValue: 'Tasa Efectiva Anual (TEA)' },
    { value: 'TES', viewValue: 'Tasa Efectiva Semestral (TES)' },
    { value: 'TEC', viewValue: 'Tasa Efectiva Cuatrimestral (TEC)' },
    { value: 'TET', viewValue: 'Tasa Efectiva Trimestral (TET)' },
    { value: 'TEB', viewValue: 'Tasa Efectiva Bimestral (TEB)' },
    { value: 'TEM', viewValue: 'Tasa Efectiva Mensual (TEM)' },
    { value: 'TEQ', viewValue: 'Tasa Efectiva Quincenal (TEQ)' },
    { value: 'TED', viewValue: 'Tasa Efectiva Diaria (TED)' },
  ];
  typeRateN: TypeSelect[] = [
    { value: 'TNA', viewValue: 'Tasa Nominal Anual (TNA)' },
    { value: 'TNS', viewValue: 'Tasa Nominal Semestral (TNS)' },
    { value: 'TNC', viewValue: 'Tasa Nominal Cuatrimestral (TNC)' },
    { value: 'TNT', viewValue: 'Tasa Nominal Trimestral (TNT)' },
    { value: 'TNB', viewValue: 'Tasa Nominal Bimestral (TNB)' },
    { value: 'TNM', viewValue: 'Tasa Nominal Mensual (TNM)' },
    { value: 'TNQ', viewValue: 'Tasa Nominal Quincenal (TNQ)' },
    { value: 'TND', viewValue: 'Tasa Nominal Diaria (TND)' },
  ];

  typePeriodGrace: TypeSelect[] = [
    { value: 'T', viewValue: 'TOTAL' },
    { value: 'P', viewValue: 'PARCIAL' },
    { value: 'N', viewValue: 'NINGUNO' },
  ];


  constructor(
    private fb: FormBuilder,
  ) {
    this.formGroup = this.fb.group({
      tipoDeTasa: ['E', [Validators.required]],
      valorTasaEfectiva: ['0.00', [Validators.required]],
      tipoTasaEfectiva: ['TEA', [Validators.required]],
      valorTasaNominal: ['0.00', [Validators.required]],
      tipoTasaNominal: ['TNA', [Validators.required]],
      frecuenciaCapitalizacionDias: ['0', [Validators.required]],
      precioVenta: ['0.00', [Validators.required]],
      porcentajeCuotaInicial: ['0.00', [Validators.required]],
      numeroAnios: ['0', [Validators.required]],
      tipoPeriodoGracia: ['N', [Validators.required]],
      cantidadPeriodoGracia: ['0', [Validators.required]],
      tasaSeguroDesgravamen: ['0.00', [Validators.required]],
      tasaSeguroTodoRiesgo: ['0.00', [Validators.required]],
      gastosAdministrativos: ['0.00', [Validators.required]],
      portes: ['0.00', [Validators.required]],
      comisionPeriodica: ['0.00', [Validators.required]],
      costosNotariales: ['0.00', [Validators.required]],
      registrales: ['0.00', [Validators.required]],
    });
  }

  generatePDP(): void {
    const request: IPDPRequest = this.formGroup.value;
    this.formData.emit(request);
  }
}
