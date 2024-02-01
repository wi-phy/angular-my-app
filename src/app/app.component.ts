import { Component } from '@angular/core';
import { Enfants } from './enums/enfants.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Enfants = Enfants;
}
