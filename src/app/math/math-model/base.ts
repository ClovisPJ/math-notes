abstract class Descriptable {

  constructor(description: string) {
    this._description = description;
  }

  // tslint:disable-next-line:variable-name
  private _description: string;

  get description(): string {
    return this._description;
  }
  set description(description: string) {
    this._description = description;
  }

}

abstract class Latexable extends Descriptable {

  constructor(description: string, latex: string) {
    super(description);
    this._latex = latex;
  }

  // tslint:disable-next-line:variable-name
  private _latex: string;

  get latex(): string {
    return this._latex;
  }
  set latex(latex: string) {
    this._latex = latex;
  }

}
