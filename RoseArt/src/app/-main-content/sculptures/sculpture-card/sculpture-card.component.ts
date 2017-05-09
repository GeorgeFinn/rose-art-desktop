import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sculpture-card',
  templateUrl: './sculpture-card.component.html',
  styleUrls: ['./sculpture-card.component.scss']
})
export class SculptureCardComponent implements OnInit {
  @Input() title: string;
  @Input() author: string;
  @Input() imageUrl: string;
  
  constructor() { }

  ngOnInit() {
  }

}
