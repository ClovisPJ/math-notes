import { Component } from '@angular/core';
import {Definition} from './math/math-model/document';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'math-notes';

  defintions = [
    new Definition('Heya therre', '\LaTeX'),
    new Definition('Heya therre', '\LaTeX'),
    new Definition('Heya therre', '\LaTeX'),
  ];

  enumerate(definitions: Definition[]): object[] {
    return definitions.map((definition: Definition, index: number) => {
    return {
      number: '2.' + index,
      description: definition.description,
      latex: definition.latex,
    };
    });
  }

}
