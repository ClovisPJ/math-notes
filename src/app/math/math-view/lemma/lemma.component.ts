import { Component, Input } from '@angular/core';
import { Lemma } from '../../math-model/document';

@Component({
  selector: 'app-lemma',
  templateUrl: './lemma.component.html',
  styleUrls: ['./lemma.component.css']
})
export class LemmaComponent {

  @Input() number: number;
  @Input() lemma: Lemma;

  constructor() {
  }

}
