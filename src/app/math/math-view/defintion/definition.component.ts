import { Component, Input, OnInit } from '@angular/core';
import { Definition } from '../../math-model/document';

@Component({
  selector: 'app-defintion',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent {

  @Input() number: number;
  @Input() definition: Definition;

  constructor() {
  }

}
