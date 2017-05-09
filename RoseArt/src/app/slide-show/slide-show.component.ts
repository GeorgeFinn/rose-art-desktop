import { Component, OnInit, OnDestroy } from '@angular/core';
import { Art } from "app/art.model";

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit, OnDestroy {

    public current:number = 1;
    public max: number = 1;
    public gallery:Array<Art> = [];
    private interval: any;
    
    constructor(){}

    ngOnInit(): void {
        this.populate();
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
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
        this.max = counter;
        this.startTimer();
    }
    startTimer(): void {
        this.interval = setInterval(() => {
            if(this.current >= (this.max - 1)) {
                this.current = 1;
            } else {
                this.current += 1;
            }
            }, 4000);
    }
    setCurrent(_newValue){
        this.current = _newValue;
    }
}
