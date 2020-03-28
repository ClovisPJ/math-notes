import { Component, Input } from '@angular/core';
import { Section } from '../../math-model/document';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  @Input() number: number;
  @Input() section: Section;

  constructor() {
  }

}
