import { Art } from './../../art.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss']
})
export class ArtCardComponent implements OnInit {
  @Input() art: Art;
  @Input() folder: string;
  @Input() index: number;
  @Input() numItems: number;
  
  constructor() {}

  ngOnInit() {
  }

}
