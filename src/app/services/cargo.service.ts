import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private apiUrl = 'http://localhost:3000/cargos';  // Endpoint para os cargos

  constructor(private http: HttpClient) {}

  // Método para obter os cargos
  getCargos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
