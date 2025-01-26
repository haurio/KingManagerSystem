import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentYear!: number; // Usando '!' para indicar que o valor será atribuído no ngOnInit

  ngOnInit() {
    this.currentYear = new Date().getFullYear(); // Atribuindo o ano atual
  }

  title = 'KingManager';
}
