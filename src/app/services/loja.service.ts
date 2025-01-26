import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  private apiUrl = 'http://localhost:3000/empresas';  // Endpoint para as lojas

  constructor(private http: HttpClient) {}

  // Método para obter as lojas
  getLojas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
