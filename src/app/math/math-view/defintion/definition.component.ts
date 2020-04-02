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

  // tslint:disable-next-line:variable-name
  private _hover: boolean;
  // tslint:disable-next-line:variable-name
  private _click: boolean;

  constructor() {
    this._hover = false;
    this._click = false;
  }

  get click(): boolean {
    return this._click;
  }

  set click(value: boolean) {
    this._click = value;
  }
  get hover(): boolean {
    return this._hover;
  }

  set hover(value: boolean) {
    this._hover = value;
  }

  get hideClickerColor() {
    if (this.hover) {
      return '#e1e1e1';
    } else if (this.click) {
      return '#f5faff';
    } else {
      return '#909090';
    }
  }

}
