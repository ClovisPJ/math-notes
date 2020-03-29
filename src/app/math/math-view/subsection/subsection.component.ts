import { Component, Input } from '@angular/core';
import { Subsection } from '../../math-model/document';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.css']
})
export class SubsectionComponent {

  @Input() number: number;
  @Input() subsection: Subsection;

  private hideBody: boolean;

  constructor() {
  }

  switchHideBody() {
    this.hideBody = !this.hideBody;
  }

}
