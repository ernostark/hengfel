/*
* File: app.component.ts
* Author: Stark Ernő
* Copyright: 2024, Stark Ernő
* Group: Szoft II/2/E
* Date: 2024-12-06
* Github: https://github.com/ernostark/hengfel.git
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { HengerComponent } from "./henger/henger.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HengerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hengfel';
}
