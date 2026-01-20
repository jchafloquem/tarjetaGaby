import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Invitation } from './invitation/invitation';

@Component({
  selector: 'app-root',
  imports: [Invitation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tarjetaGaby');
}
