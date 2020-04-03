import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Section, Subsection} from '../../math-model/document';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  @Input() number: number;
  @Input() section: Section;
  @Input() isNewSection: boolean;
  @Input() lockEdit: boolean;

  // tslint:disable-next-line:variable-name
  @Output('descriptionClick') _descriptionClick = new EventEmitter<boolean>();

  // tslint:disable-next-line:variable-name
  private _hover: boolean;
  // tslint:disable-next-line:variable-name
  private _click: boolean;
  newSubsectionBanner: Subsection = new Subsection('+', [], []);

  constructor() {
    this._hover = false;
    this._click = false;
  }

  get click(): boolean {
    return this._click;
  }

  set click(value: boolean) {
    if (this.isNewSection) {
      return;
    }
    this._click = value;
  }
  get hover(): boolean {
    return this._hover;
  }

  set hover(value: boolean) {
    this._hover = value;
  }

  get descriptionColor() {
    if (this.hover) {
      return '#eff4f9';
    } else if (this.click) {
      return '#e9eef3';
    } else {
      return '#f5faff';
    }
  }

  descriptionClick() {
    this._descriptionClick.emit(true);
    if (this.isNewSection) {
      return;
    }
    this.click = !this.click;
  }

  createNewSubsection() {
    this.section.subsections.push(new Subsection('New Subsection', [], []));
  }

}
