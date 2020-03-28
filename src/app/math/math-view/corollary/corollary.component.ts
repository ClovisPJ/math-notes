import { Component, Input } from '@angular/core';
import { Corollary } from '../../math-model/document';

@Component({
  selector: 'app-corollary',
  templateUrl: './corollary.component.html',
  styleUrls: ['./corollary.component.css']
})
export class CorollaryComponent {

  @Input() number: number;
  @Input() corollary: Corollary;

  constructor() {
  }

}
