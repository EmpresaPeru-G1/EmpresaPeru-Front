import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPDPRequest, IPDPResponse } from './payments.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private api = environment.API;

  constructor(private http: HttpClient) { }

  generatePDP(request: IPDPRequest): Observable<IPDPResponse[]> {
    return this.http.post<IPDPResponse[]>(`${this.api}/pdp/`, request);
  }
}
