import { Component, Input } from '@angular/core';
import { Proof } from '../../math-model/document';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.css']
})
export class ProofComponent {

  @Input() number: number;
  @Input() proof: Proof;

  constructor() {
  }

}
