import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private apiUrl = 'http://localhost:3000/cargos';

  constructor(private http: HttpClient) {}

  getCargos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
