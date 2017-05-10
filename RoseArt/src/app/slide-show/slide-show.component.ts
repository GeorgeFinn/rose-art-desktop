import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Art } from "app/art.model";

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit, OnDestroy {

    @Input() previews: boolean = true;
    @Input() folder: string = "";
    @Input() artPieces: Array<Art> = [];
    public current: number = 1;
    public numItems: number;
    private interval: any;
    
    constructor(){}

    ngOnInit(): void {
        this.numItems = this.artPieces.length;
        this.startTimer();
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    startTimer(): void {
        this.interval = setInterval(() => {
            if(this.current >= this.numItems) {
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
