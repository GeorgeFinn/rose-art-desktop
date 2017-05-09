import { Art } from './../../../art.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sculpture-card',
  templateUrl: './sculpture-card.component.html',
  styleUrls: ['./sculpture-card.component.scss']
})
export class SculptureCardComponent implements OnInit {
  @Input() art: Art;
  
  constructor() {}

  ngOnInit() {
  }

}
