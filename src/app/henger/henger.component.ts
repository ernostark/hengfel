import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-henger',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './henger.component.html',
  styleUrl: './henger.component.css'
})
export class HengerComponent {
  radius !: number;
  length !: number;
  surface !: number;

  startCalc() {

    const pi = Math.PI;
    this.surface = 2 * pi * this.radius * (this.radius + this.length);

  }
}
