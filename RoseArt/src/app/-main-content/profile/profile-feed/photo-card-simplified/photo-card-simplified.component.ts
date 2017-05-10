import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-card-simplified',
  templateUrl: './photo-card-simplified.component.html',
  styleUrls: ['./photo-card-simplified.component.scss']
})
export class PhotoCardSimplifiedComponent implements OnInit {

  @Input() title: string;
  @Input() author: string;
  @Input() imageUrl: string;
  
  constructor() { }

  ngOnInit() {
  }

}
