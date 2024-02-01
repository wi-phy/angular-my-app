import { Component, Input } from '@angular/core';
import { Enfants } from 'src/app/enums/enfants.enum';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  @Input() enfant?: Enfants;

  myParamEnfant1 = 'enfant 1'; // paramètre pour enfant 1
  myParamEnfant2 = 'enfant 2'; // paramètre pour enfant 2

  Enfants = Enfants; // nécessaire pour utiliser l'enum dans le template
}
