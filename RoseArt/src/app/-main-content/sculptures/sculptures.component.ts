import { Art } from './../../art.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.component.html',
})
export class SculpturesComponent implements OnInit {

  public sculptures:Array<Art> = [];
  public url = "https://s-media-cache-ak0.pinimg.com/236x/a8/82/ef/a882ef6ee1bd744dbfe6a8ae4c0cc7c1.jpg";
  public title = "Flame of Milenium";
  public author = "Leonardo Nierman";

  constructor() {
   }

  ngOnInit() {
    this.populate();
  }

   populate(): void {
    var nameOfPicFolder = '../../assets/images/sculptures';
    var noOfPics = 7;
    var counter = 1;
    var tempArt: Art;
    while (counter <= noOfPics) {
        tempArt = new Art();
        tempArt.author = 'author: ' + counter;
        tempArt.title = 'title: ' + counter;
        tempArt.url = nameOfPicFolder + '/art' + counter + '.jpg';
        this.sculptures.push(tempArt);
        counter++;
      }
    }
  }
