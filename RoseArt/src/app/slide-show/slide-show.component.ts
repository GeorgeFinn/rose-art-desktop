import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Art } from "app/art.model";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit, OnDestroy {

    @Input() previews: boolean = true;
    @Input() folder: string = "";
    @Input() artPieces: FirebaseListObservable<Art[]>;
    @Input() numItems: number;
    public current: number = 1;
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
