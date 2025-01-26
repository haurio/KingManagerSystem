import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaService } from '../../services/loja.service'; // Serviço de lojas
import { CargoService } from '../../services/cargo.service'; // Serviço de cargos
import { HttpErrorResponse } from '@angular/common/http'; // Para tratamento de erros HTTP

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  templateUrl: './default-login-layout.component.html',
  styleUrls: ['./default-login-layout.component.scss'],
  imports: [CommonModule],
})
export class DefaultLoginLayoutComponent implements OnInit {
  currentYear: number = new Date().getFullYear(); // Ano atual para rodapé
  isModalVisible: boolean = false; // Controle do modal de registro
  isSuccessPopupVisible: boolean = false; // Controle do popup de sucesso
  isEmailRegisteredPopupVisible: boolean = false; // Controle do popup de email já registrado
  lojas: string[] = []; // Lista de lojas
  cargos: string[] = []; // Lista de cargos
  isLoading: boolean = true; // Controle de carregamento das lojas

  constructor(
    private lojaService: LojaService,  // Injeção do LojaService
    private cargoService: CargoService  // Injeção do CargoService
  ) {}

  ngOnInit() {
    this.carregarDados(); // Carrega os dados ao inicializar o componente
  }

  /** Abre o modal de registro */
  openRegisterModal(): void {
    this.isModalVisible = true;
    this.carregarDados(); // Recarrega os dados ao abrir o modal
  }

  /** Fecha o modal de registro */
  closeRegisterModal(): void {
    this.isModalVisible = false;
  }

  /** Exibe o popup de sucesso */
  showSuccessPopup(): void {
    this.isSuccessPopupVisible = true;
    setTimeout(() => {
      this.isSuccessPopupVisible = false;
    }, 5000); // O popup será exibido por 5 segundos
  }

  /** Exibe o popup de email já registrado */
  showEmailRegisteredPopup(): void {
    this.isEmailRegisteredPopupVisible = true;
    setTimeout(() => {
      this.isEmailRegisteredPopupVisible = false;
    }, 5000); // O popup será exibido por 5 segundos
  }

  /** Lida com a submissão do formulário de registro */
  onRegisterSubmit(event: Event): void {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const form = event.target as HTMLFormElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput.value;

    if (this.isEmailRegistered(email)) {
      this.showEmailRegisteredPopup(); // Exibe o popup caso o email já esteja registrado
    } else {
      console.log('Formulário de cadastro enviado!');
      this.isModalVisible = false; // Fecha o modal
      this.showSuccessPopup(); // Exibe o popup de sucesso
      form.reset(); // Reseta o formulário
    }
  }

  /** Verifica se o email está registrado */
  isEmailRegistered(email: string): boolean {
    // Substitua com a lógica real para verificar no backend
    const registeredEmails = ['example@example.com', 'user@domain.com']; // Emails fictícios
    return registeredEmails.includes(email);
  }

  /** Carrega os dados de lojas e cargos */
  carregarDados(): void {
    // Carrega as lojas
    this.lojaService.getLojas().subscribe(
      (data: any) => {
        this.lojas = data.map((loja: any) => loja.nome_fantasia);
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Erro ao buscar lojas:', error);
        this.isLoading = false;
      }
    );

    // Carrega os cargos
    this.cargoService.getCargos().subscribe(
      (data: any) => {
        this.cargos = data.map((cargo: any) => cargo.nome_cargo);
        console.log('Cargos carregados:', this.cargos);
      },
      (error: any) => {
        console.error('Erro ao buscar cargos:', error);
      }
    );
  }
}
