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
      this.step++;
      if (this.step > 3) {
        this.step = 1;
      }
    }
  }
}
