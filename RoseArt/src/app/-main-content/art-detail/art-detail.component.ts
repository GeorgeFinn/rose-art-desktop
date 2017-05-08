import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css']
})
export class ArtDetailComponent implements OnInit {

  @Input() title: string;
  @Input() author: string;
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit() {
  }
}
