import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Art } from "app/art.model";

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit, OnDestroy {

    @Input() folder: string = "";
    @Input() artPieces: Array<Art> = [];
    public current: number = 1;
    public numItems: number = 8;
    private interval: any;
    
    constructor(){}

    ngOnInit(): void {
        this.startTimer();
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    startTimer(): void {
        this.interval = setInterval(() => {
            if(this.current >= (this.numItems - 1)) {
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
