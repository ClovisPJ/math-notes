import {Component, Input } from '@angular/core';
import { Section } from '../../math-model/document';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  @Input() number: number;
  @Input() section: Section;

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

  get descriptionColor() {
    if (this.click) {
      return '#a2a2a2';
    } else if (this.hover) {
      return '#cdcdcd';
    } else {
      return '#e2e2e2';
    }
  }

}
