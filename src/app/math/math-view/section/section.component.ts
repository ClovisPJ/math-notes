import {Component, Input, Pipe, PipeTransform} from '@angular/core';
import { Section } from '../../math-model/document';
import {switchMapTo} from 'rxjs/operators';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  @Input() number: number;
  @Input() section: Section;

  private mouseInteraction: string;

  constructor() {
    this.mouseInteraction = 'none';
  }

  click() {
    this.mouseInteraction = (this.mouseInteraction !== 'click') ? 'click' : 'none';
  }

  mouseInteract(state: string) {
    this.mouseInteraction = state;
  }

}

@Pipe({name: 'descriptionColorPipe'})
export class DescriptionColorPipe implements PipeTransform {
  transform(mouseInteraction: string): string {
    switch (mouseInteraction) {
      case 'click':
        return '#a2a2a2';
      case 'hover':
        return '#cdcdcd';
      case 'none':
      default:
        return '#e2e2e2';
    }
  }
}
