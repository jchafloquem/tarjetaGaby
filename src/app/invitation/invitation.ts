import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation',
  imports: [CommonModule],
  templateUrl: './invitation.html',
  styleUrl: './invitation.css',
})
export class Invitation {
  isOpen = false;
  step = 0;

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
