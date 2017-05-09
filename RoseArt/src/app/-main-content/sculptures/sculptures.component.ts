import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.component.html',
  providers: [NgbCarouselConfig]
})
export class SculpturesComponent implements OnInit {

  public sculptures = [1, 2, 3];
  public url = "https://s-media-cache-ak0.pinimg.com/236x/a8/82/ef/a882ef6ee1bd744dbfe6a8ae4c0cc7c1.jpg";
  public title = "Flame of Milenium";
  public author = "Leonardo Nierman";

  constructor(config: NgbCarouselConfig) {
    config.interval = 100000;
    config.wrap = false;
    config.keyboard = true;
   }

  ngOnInit() {
  }

}
