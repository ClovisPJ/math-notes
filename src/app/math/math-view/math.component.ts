import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-math-definition',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  @Input() number: number;
  @Input() description: string;
  @Input() latex: string;

  constructor() {
  }

  ngOnInit() {
  }

}
