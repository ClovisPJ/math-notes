import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lemma',
  templateUrl: './lemma.component.html',
  styleUrls: ['./lemma.component.css']
})
export class LemmaComponent {

  @Input() number: number;
  @Input() description: string;
  @Input() latex: string;

  constructor() {
  }

}
