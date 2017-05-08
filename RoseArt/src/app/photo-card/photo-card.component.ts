import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  @Input() title: string;
  @Input() author: string;
  @Input() imageUrl: string;
  
  constructor() { }

  ngOnInit() {
  }

}
