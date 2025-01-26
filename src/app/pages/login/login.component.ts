import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent // Verifique se o DefaultLoginLayoutComponent também é um componente standalone
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  // Corrigido o nome do campo para "styleUrls" (no plural)
})
export class LoginComponent {
  // Lógica do componente, se necessário
}
