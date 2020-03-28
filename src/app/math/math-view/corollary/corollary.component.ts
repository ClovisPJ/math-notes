import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-corollary',
  templateUrl: './corollary.component.html',
  styleUrls: ['./corollary.component.css']
})
export class CorollaryComponent {

  @Input() number: number;
  @Input() description: string;
  @Input() latex: string;

  constructor() {
  }

}
