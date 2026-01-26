import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-invitation',
  imports: [CommonModule],
  templateUrl: './invitation.html',
  styleUrl: './invitation.css',
})
export class Invitation implements OnInit, OnDestroy {
  isOpen = false;
  step = 0;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCountdown() {
    const targetDate = new Date('March 7, 2026 20:00:00').getTime();

    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(this.intervalId);
        return;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }

  onClick() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.step = 1;
    } else {
      // Si estamos en el paso 3 (tercera cara), vamos al 4 (cerrar)
      if (this.step === 3) {
        this.step = 4;

        // Opcional: Reiniciar el estado completamente después de la animación
        // para que el usuario pueda volver a abrir el sobre si quiere.
        setTimeout(() => {
          this.isOpen = false;
          this.step = 0;
        }, 1500); // 1.5 segundos espera a que termine la animación de cierre
      } else if (this.step < 3) {
        // Si no es la última cara, avanzamos al siguiente paso
        this.step++;
      }
    }
  }

}
