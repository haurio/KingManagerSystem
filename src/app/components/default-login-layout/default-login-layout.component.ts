import { Component } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true, // Permite que o componente seja independente
  templateUrl: './default-login-layout.component.html', // Caminho correto do template
  styleUrls: ['./default-login-layout.component.scss'] // Caminho correto do estilo
})
export class DefaultLoginLayoutComponent {
  currentYear: number = new Date().getFullYear(); // Obtém o ano atual
}
