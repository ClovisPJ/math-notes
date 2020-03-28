import { Descriptable, Latexable } from 'base';

export class Document {

  constructor(sections: Section[]) {
    this._sections = sections;
  }

  // tslint:disable-next-line:variable-name
  private _sections: Section[];

  get sections(): Section[] {
    return this._sections;
  }

  set sections(value: Section[]) {
    this._sections = value;
  }

}

export class Section extends Descriptable {

  constructor(description: string, subsections: Subsection[]) {
    super(description);
    this._subsections = subsections;
  }

  // tslint:disable-next-line:variable-name
  private _subsections: Subsection[];

  get subsections(): Subsection[] {
    return this._subsections;
  }

  set subsections(value: Subsection[]) {
    this._subsections = value;
  }

}

export class Subsection extends Descriptable {

  constructor(description: string, defintions: Definition[], propositions: Proposition[]) {
    super(description);
    this._defintions = defintions;
    this._propositions = propositions;
  }

  // tslint:disable-next-line:variable-name
  private _defintions: Definition[];
  // tslint:disable-next-line:variable-name
  private _propositions: Proposition[];

  get defintions(): Definition[] {
    return this._defintions;
  }

  set defintions(value: Definition[]) {
    this._defintions = value;
  }

  get propositions(): Proposition[] {
    return this._propositions;
  }

  set propositions(value: Proposition[]) {
    this._propositions = value;
  }

}

export class Definition extends Latexable {

  constructor(description: string, latex: string) {
    super(description, latex);
  }

}

export class Proposition extends Latexable {

  constructor(description: string, latex: string, lemmas: Lemma[], proof: Proof, corollaries: Corollary[], examples: Example[]) {
    super(description, latex);
    this._lemmas = lemmas;
    this._proof = proof;
    this._corollaries = corollaries;
    this._examples = examples;
  }

  // tslint:disable-next-line:variable-name
  private _lemmas: Lemma[];
  // tslint:disable-next-line:variable-name
  private _proof: Proof;
  // tslint:disable-next-line:variable-name
  private _corollaries: Corollary[];
  // tslint:disable-next-line:variable-name
  private _examples: Example[];

  get lemmas(): Lemma[] {
    return this._lemmas;
  }

  set lemmas(value: Lemma[]) {
    this._lemmas = value;
  }

  get proof(): Proof {
    return this._proof;
  }

  set proof(value: Proof) {
    this._proof = value;
  }

  get corollaries(): Corollary[] {
    return this._corollaries;
  }

  set corollaries(value: Corollary[]) {
    this._corollaries = value;
  }

  get examples(): Example[] {
    return this._examples;
  }

  set examples(value: Example[]) {
    this._examples = value;
  }

}

export class Lemma extends Latexable {

  constructor(description: string, latex: string) {
    super(description, latex);
  }

}

export class Proof extends Latexable {

  constructor(description: string, latex: string) {
    super(description, latex);
  }

}

export class Corollary extends Latexable {

  constructor(description: string, latex: string) {
    super(description, latex);
  }

}

export class Example extends Latexable {

  constructor(description: string, latex: string) {
    super(description, latex);
  }

}
