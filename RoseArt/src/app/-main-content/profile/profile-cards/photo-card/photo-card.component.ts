import { Art } from './../../../../art.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

 @Input() art: Art;
  @Input() folder: string;
  @Input() index: number;
  @Input() numItems: number;
  
  constructor() {}

  ngOnInit() {
  }

}
