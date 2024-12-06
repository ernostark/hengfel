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
