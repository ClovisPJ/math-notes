import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.css']
})
export class ProofComponent {

  @Input() number: number;
  @Input() description: string;
  @Input() latex: string;

  constructor() {
  }

}
