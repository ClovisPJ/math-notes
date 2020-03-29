import { Component } from '@angular/core';
import {Document, Definition, Section, Subsection} from './math/math-model/document';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'math-notes';
  document = Document.parse(doc);

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

const doc = {
  sections: [{
    description: 'section 1',
    subsections: [
      {
        description: 'subsection 1',
        definitions: [
          { description: 'heyaa there', latex: '\LaTeX' },
          { description: 'heyab there', latex: '\LaTeX' },
          { description: 'heyac there', latex: '\LaTeX' }
        ],
        propositions: []
      }
    ]
  }]
};
