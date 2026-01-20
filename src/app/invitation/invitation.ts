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

  toggleEnvelope() {
    this.isOpen = !this.isOpen;
  }
}
