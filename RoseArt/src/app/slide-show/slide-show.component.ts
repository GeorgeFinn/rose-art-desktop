import { Component, OnInit } from '@angular/core';
import { Art } from "app/art.model";

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent {

    public current:number = 1;
    public gallery:Array<Art> = [];

    constructor(){}

    ngOnInit(): void {
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
            this.gallery.push(tempArt);
            counter++;
        }
    }
    setCurrent(_newValue){
        this.current = _newValue;
    }
}
