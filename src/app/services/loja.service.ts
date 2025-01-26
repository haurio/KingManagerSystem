import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  private apiUrl = 'http://localhost:3000/empresas';  // Substitua pelo seu endpoint correto

  constructor(private http: HttpClient) {}

  getLojas(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl); // Supondo que a resposta seja um array de objetos
  }
}
