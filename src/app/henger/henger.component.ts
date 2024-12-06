/*
* File: henger.component.ts
* Author: Stark Ernő
* Copyright: 2024, Stark Ernő
* Group: Szoft II/2/E
* Date: 2024-12-06
* Github: https://github.com/ernostark/hengfel.git
* Licenc: GNU GPL
*/

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
