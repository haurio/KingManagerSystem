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

  // Função para abrir o modal de registro
  openRegisterModal(): void {
    this.isModalVisible = true;
    console.log('Modal aberto', this.isModalVisible); // Log para debug
  }

  // Função para fechar o modal de registro
  closeRegisterModal(): void {
    this.isModalVisible = false;
    console.log('Modal fechado', this.isModalVisible); // Log para debug
  }

  // Função para tratar a submissão do formulário de cadastro
  onRegisterSubmit(event: Event): void {
    event.preventDefault(); // Prevenir comportamento padrão de submissão
    console.log('Formulário de cadastro enviado!');
    this.closeRegisterModal();
  }
}
