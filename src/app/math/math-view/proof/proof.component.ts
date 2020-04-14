import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { Proof } from '../../math-model/document';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.css']
})
export class ProofComponent implements OnInit, OnChanges {

  @Input() number: number;
  @Input() proof: Proof;
  @Input() lockEdit: boolean;

  private mathHtml: HTMLElement;
  private MQ: any;
  private field: any;

  constructor() {
  }

  initField() {
    this.mathHtml = document.getElementById('math');
    this.MQ = (window as any).MathQuill.getInterface(2);
    if (this.field) {
      this.field.revert();
    }
    this.field = this.lockEdit ? this.MQ.StaticMath(this.mathHtml) : this.MQ.MathField(this.mathHtml);
  }

  ngOnInit(): void {
    this.initField();
    this.field.latex(this.proof.latex);
  }

  ngOnChanges(): void {
    this.proof.latex = this.field.latex();
    this.initField();
    this.field.latex(this.proof.latex);
  }

  setProofDescription(description: string): void {
    this.proof.description = description;
  }

}
