import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Importa o roteador
  template: `
    <router-outlet></router-outlet>
  `, // Renderiza o conteúdo da rota ativa
})
export class AppComponent {}
