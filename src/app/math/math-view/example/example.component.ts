import { Component, Input } from '@angular/core';
import { Example } from '../../math-model/document';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  @Input() number: number;
  @Input() example: Example;

  constructor() {
  }

}
