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

  // tslint:disable-next-line:variable-name
  @Output('descriptionClick') _descriptionClick = new EventEmitter<boolean>();

  // tslint:disable-next-line:variable-name
  private _hideBody: boolean;
  // tslint:disable-next-line:variable-name
  private _hideDefinitions: boolean;
  // tslint:disable-next-line:variable-name
  private _hidePropositions: boolean;

  constructor() {
    this._hideBody = false;
    this._hideDefinitions = false;
    this._hidePropositions = false;
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
    this._descriptionClick.emit(true);
  }

}
