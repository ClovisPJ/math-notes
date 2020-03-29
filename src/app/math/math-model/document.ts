export class Descriptable {

  protected constructor(description: string) {
    this._description = description;
  }

  // tslint:disable-next-line:variable-name
  private _description: string;

  public get description(): string {
    return this._description;
  }
  public set description(description: string) {
    this._description = description;
  }

  public static parse({ description }: { description: string }): Descriptable {
    return new Descriptable(description);
  }

}

export class Latexable extends Descriptable {

  protected constructor(description: string, latex: string) {
    super(description);
    this._latex = latex;
  }

  // tslint:disable-next-line:variable-name
  private _latex: string;

  public get latex(): string {
    return this._latex;
  }
  public set latex(latex: string) {
    this._latex = latex;
  }

  public static parse({ description, latex }: { description: string, latex: string }): Latexable {
    return new Latexable(description, latex);
  }


}

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

  public static parse({ sections }: { sections: object[] }): Document {
    return new Document(sections.map(Section.parse));
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

  public static parse({ description, subsections }:
                        { description: string, subsections: object[] }
                        ): Section {
    return new Section(
      description, subsections.map(Subsection.parse)
    );
  }

}

export class Subsection extends Descriptable {

  constructor(description: string, definitions: Definition[], propositions: Proposition[]) {
    super(description);
    this._definitions = definitions;
    this._propositions = propositions;
  }

  // tslint:disable-next-line:variable-name
  private _definitions: Definition[];
  // tslint:disable-next-line:variable-name
  private _propositions: Proposition[];

  get defintions(): Definition[] {
    return this._definitions;
  }

  set defintions(value: Definition[]) {
    this._definitions = value;
  }

  get propositions(): Proposition[] {
    return this._propositions;
  }

  set propositions(value: Proposition[]) {
    this._propositions = value;
  }

  public static parse({ description, definitions, propositions }:
                        { description: string, definitions: object[], propositions: object[] }
                        ): Subsection {
    return new Subsection(
      description, definitions.map(Definition.parse), propositions.map(Proposition.parse),
    );
  }

}

export class Definition extends Latexable {

  constructor(description: string, latex: string) {
    super(description, latex);
  }

  public static parse(definition): Definition {
    return super.parse(definition) as Definition;
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

  public static parse({ description, latex, lemmas, proof, corollaries, examples }:
                        { description: string, latex: string, lemmas: object[], proof: object, corollaries: object[], examples: object[] }
                        ): Proposition {
    return new Proposition(
      description, latex,
      lemmas.map(Lemma.parse), Proof.parse(proof), corollaries.map(Corollary.parse), examples.map(Example.parse)
    );
  }

}

export class Lemma extends Latexable {

  constructor(description: string, latex: string) {
    super(description, latex);
  }

  public static parse(definition): Lemma {
    return super.parse(definition) as Lemma;
  }

}

export class Proof extends Latexable {

  constructor(description: string, latex: string) {
    super(description, latex);
  }

  public static parse(proof): Proof {
    return super.parse(proof) as Proof;
  }

}

export class Corollary extends Latexable {

  constructor(description: string, latex: string) {
    super(description, latex);
  }

  public static parse(corollary): Corollary {
    return super.parse(corollary) as Corollary;
  }

}

export class Example extends Latexable {

  constructor(description: string, latex: string) {
    super(description, latex);
  }

  public static parse(example): Example {
    return super.parse(example) as Example;
  }

}
