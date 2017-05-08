import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.component.html',
  styleUrls: ['./sculptures.component.scss']
})
export class SculpturesComponent implements OnInit {

  public sculptures = [1, 2, 3];
  public url = "https://s-media-cache-ak0.pinimg.com/236x/a8/82/ef/a882ef6ee1bd744dbfe6a8ae4c0cc7c1.jpg";
  public title = "Flame of Milenium";
  public author = "Leonardo Nierman";

  constructor() { }

  ngOnInit() {
  }

}
