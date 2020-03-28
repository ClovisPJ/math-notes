import { Component, Input } from '@angular/core';
import { Document } from '../../math-model/document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {

  @Input() document: Document;

  constructor() {
  }

}
