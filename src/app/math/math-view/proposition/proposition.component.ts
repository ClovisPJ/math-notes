import { Component, Input } from '@angular/core';
import { Proposition } from '../../math-model/document';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent {

  @Input() number: number;
  @Input() proposition: Proposition;

  constructor() {
  }

}
