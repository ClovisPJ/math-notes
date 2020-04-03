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
  @Input() lockEdit: boolean;

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
      return '#909090';
    } else if (this.click) {
      return '#f5faff';
    } else {
      return '#404040';
    }
  }

}
