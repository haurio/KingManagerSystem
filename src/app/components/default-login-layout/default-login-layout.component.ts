import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaService } from '../../services/loja.service'; // Certifique-se de que o serviço LojaService esteja importado corretamente
import { HttpErrorResponse } from '@angular/common/http'; // Para tratamento detalhado de erros HTTP

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  templateUrl: './default-login-layout.component.html',
  styleUrls: ['./default-login-layout.component.scss'],
  imports: [CommonModule]
})
export class DefaultLoginLayoutComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  isModalVisible: boolean = false; // Variável para controlar a visibilidade do modal
  isSuccessPopupVisible: boolean = false; // Variável para controlar a visibilidade do popup de sucesso
  isEmailRegisteredPopupVisible: boolean = false; // Variável para controlar a visibilidade do popup de email já registrado
  lojas: string[] = []; // Lista de lojas (preenchido dinamicamente)
  cargos: string[] = []; // Lista de cargos (preenchido dinamicamente)
  isLoading: boolean = true; // Controle de carregamento das lojas

  constructor(private lojaService: LojaService) {}

  ngOnInit() {
    this.carregarDados(); // Chama o método de carregar dados assim que o componente é inicializado
  }

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
    this.lojaService.getLojas().subscribe(
      (data: any) => {
        console.log('Resposta da API: ', data);  // Verifique o que está sendo retornado pela API
        if (data && data.length > 0) {
          this.lojas = data.map((loja: any) => loja.nome_fantasia); // Aqui extraímos 'nome_fantasia' para exibir
        } else {
          console.log('Nenhuma loja encontrada.');
        }
        this.isLoading = false; // Dados carregados, atualizar o estado de carregamento
      },
      (error: HttpErrorResponse) => {
        console.error('Erro ao buscar lojas:', error.message); // Exibe a mensagem de erro caso a requisição falhe
        this.isLoading = false; // Mesmo se houver erro, stopa o carregamento
      }
    );

    // Para os cargos (simulação de dados ou busca no backend, conforme sua necessidade)
    this.cargos = ['Gerente', 'Atendente', 'Caixa'];
  }
}



