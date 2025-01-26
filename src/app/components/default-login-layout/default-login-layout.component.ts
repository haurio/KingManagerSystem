import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  templateUrl: './default-login-layout.component.html',
  styleUrls: ['./default-login-layout.component.scss'],
  imports: [CommonModule]
})
export class DefaultLoginLayoutComponent {
  currentYear: number = new Date().getFullYear();
  isModalVisible: boolean = false; // Variável para controlar a visibilidade do modal
  isSuccessPopupVisible: boolean = false; // Variável para controlar a visibilidade do popup de sucesso
  isEmailRegisteredPopupVisible: boolean = false; // Variável para controlar a visibilidade do popup de email já registrado
  lojas: string[] = []; // Lista de lojas (preenchido dinamicamente)
  cargos: string[] = []; // Lista de cargos (preenchido dinamicamente)

  openRegisterModal(): void {
    this.isModalVisible = true;
    this.carregarDados(); // Carregar dados ao abrir o modal
  }

  closeRegisterModal(): void {
    this.isModalVisible = false;
  }

  showSuccessPopup(): void {
    this.isSuccessPopupVisible = true;
    setTimeout(() => {
      this.isSuccessPopupVisible = false;
    }, 5000); // Popup será exibido por 5 segundos
  }

  showEmailRegisteredPopup(): void {
    this.isEmailRegisteredPopupVisible = true;
    setTimeout(() => {
      this.isEmailRegisteredPopupVisible = false;
    }, 5000); // Popup será exibido por 5 segundos
  }

  onRegisterSubmit(event: Event): void {
    event.preventDefault(); // Prevenir comportamento padrão de submissão
    const form = event.target as HTMLFormElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput.value;

    if (this.isEmailRegistered(email)) {
      this.showEmailRegisteredPopup();
    } else {
      console.log('Formulário de cadastro enviado!');
      this.isModalVisible = false;
      this.showSuccessPopup(); // Mostrar popup de sucesso
      form.reset();
    }
  }

  isEmailRegistered(email: string): boolean {
    // Simulação de verificação no banco de dados (substitua com sua lógica real)
    const registeredEmails = ['example@example.com', 'user@domain.com']; // Emails registrados fictícios
    return registeredEmails.includes(email);
  }

  carregarDados(): void {
    this.lojas = ['Loja 1', 'Loja 2', 'Loja 3'];
    this.cargos = ['Gerente', 'Atendente', 'Caixa'];
  }
}
