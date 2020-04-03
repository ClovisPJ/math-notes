import { Component, Input } from '@angular/core';
import {Document, Section} from '../../math-model/document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {

  @Input() document: Document;
  newSectionBanner: Section = new Section('+', []);

  constructor() {
  }

  createNewSection() {
    this.document.sections.push(new Section('New Section', []));
  }

}
