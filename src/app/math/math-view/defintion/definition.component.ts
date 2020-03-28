import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-defintion',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent {

  @Input() number: number;
  @Input() description: string;
  @Input() latex: string;

  constructor() {
  }

}
