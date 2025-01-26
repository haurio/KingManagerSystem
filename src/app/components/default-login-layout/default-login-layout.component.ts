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

  openRegisterModal(): void {
    this.isModalVisible = true;
  }

  closeRegisterModal(): void {
    this.isModalVisible = false;
  }

  showSuccessPopup(): void {
    this.isSuccessPopupVisible = true;
    setTimeout(() => {
      this.isSuccessPopupVisible = false;
    }, 3000); // Popup será exibido por 3 segundos
  }

  onRegisterSubmit(event: Event): void {
    event.preventDefault(); // Prevenir comportamento padrão de submissão
    console.log('Formulário de cadastro enviado!');
    this.isModalVisible = false;
    this.showSuccessPopup(); // Mostrar popup de sucesso

    // Limpar campos do formulário
    const form = event.target as HTMLFormElement;
    form.reset();
  }
}
