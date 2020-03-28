import {Corollary, Definition, Example, Lemma, Proof, Proposition, Section, Subsection} from './document';

export class SectionBuilder {

  constructor() {
  }

  // tslint:disable-next-line:variable-name
  private _description: string;
  // tslint:disable-next-line:variable-name
  private _subsections: Subsection[] = [];

  with_description(description: string) {
    this._description = description;
  }

  with_subsection(subsection: Subsection) {
    this._subsections.push(subsection);
  }

  build(): Section {
    return new Section(this._description, this._subsections);
  }

}

export class SubsectionBuilder {

  constructor() {
  }

  // tslint:disable-next-line:variable-name
  private _description: string;
  // tslint:disable-next-line:variable-name
  private _definitions: Definition[] = [];
  // tslint:disable-next-line:variable-name
  private _propositions: Proposition[] = [];

  with_description(description: string) {
    this._description = description;
  }

  with_definition(defintion: Definition) {
    this._definitions.push(defintion);
  }

  with_proposition(proposition: Proposition) {
    this._propositions.push(proposition);
  }

  build(): Subsection {
    return new Subsection(this._description, this._definitions, this._propositions);
  }

}

export class PropositionBuilder {

  constructor() {
  }

  // tslint:disable-next-line:variable-name
  private _description: string;
  // tslint:disable-next-line:variable-name
  private _latex: string;
  // tslint:disable-next-line:variable-name
  private _lemmas: Lemma[] = [];
  // tslint:disable-next-line:variable-name
  private _proof: Proof;
  // tslint:disable-next-line:variable-name
  private _corollaries: Corollary[] = [];
  // tslint:disable-next-line:variable-name
  private _examples: Example[] = [];

  with_description(description: string) {
    this._description = description;
  }

  with_latex(latex: string) {
    this._latex = latex;
  }

  with_lemma(lemma: Lemma) {
    this._lemmas.push(lemma);
  }

  with_proof(proof: Proof) {
    this._proof = proof;
  }

  with_corollary(corollary: Corollary) {
    this._corollaries.push(corollary);
  }

  with_example(example: Example) {
    this._examples.push(example);
  }

  build(): Proposition {
    return new Proposition(this._description, this._latex, this._lemmas, this._proof, this._corollaries, this._examples);
  }

}
