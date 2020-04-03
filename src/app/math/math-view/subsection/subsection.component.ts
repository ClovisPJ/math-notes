import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Subsection } from '../../math-model/document';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.css']
})
export class SubsectionComponent {

  @Input() number: number;
  @Input() subsection: Subsection;
  @Input() isNewSubsection: boolean;
  @Input() lockEdit: boolean;

  // tslint:disable-next-line:variable-name
  @Output('descriptionClick') _descriptionClick = new EventEmitter<boolean>();

  // tslint:disable-next-line:variable-name
  private _hideBody: boolean;
  // tslint:disable-next-line:variable-name
  private _hideDefinitions: boolean;
  // tslint:disable-next-line:variable-name
  private _hidePropositions: boolean;
  // tslint:disable-next-line:variable-name
  private _hover: boolean;

  constructor() {
    this._hideBody = false;
    this._hideDefinitions = false;
    this._hidePropositions = false;
    this._hover = false;
  }

  get hideBody(): boolean {
    return this._hideBody || this.isNewSubsection;
  }

  set hideBody(value: boolean) {
    this._hideBody = value;
  }

  get hideDefinitions(): boolean {
    return this._hideDefinitions;
  }

  set hideDefinitions(value: boolean) {
    this._hideDefinitions = value;
  }

  get hidePropositions(): boolean {
    return this._hidePropositions;
  }

  set hidePropositions(value: boolean) {
    this._hidePropositions = value;
  }

  descriptionClick() {
    if (this.isNewSubsection) {
      this._descriptionClick.emit(true);
    }
  }

  get hover(): boolean {
    return this._hover;
  }

  set hover(value: boolean) {
    this._hover = value;
  }

  get color() {
    if (this.hover && this.isNewSubsection) {
      return '#eff4f9';
    } else {
      return '#f5faff';
    }
  }

}
