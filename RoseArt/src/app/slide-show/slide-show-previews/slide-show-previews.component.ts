import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'slide-show-previews',
  templateUrl: './slide-show-previews.component.html',
  styleUrls: ['../slide-show.component.scss']
})
export class SlideShowPreviewsComponent {

    @Input() current;
    @Input() gallery;
    @Output() changed = new EventEmitter();
    constructor (){
        // If you want to add items to the list upon construction of the child,
        // use the ngOnInit() hook (not the constructor(),
        // since the data-bound properties aren't initialized at that point)
    }
    getPercent (_length){
        return '' + (100 / _length) + '%';
    }
    isCurrent (_ind){
        return parseInt(this.current) === parseInt(_ind+1);
    }
    resetCurrent (_ind) {
        this.current = parseInt(_ind+1);
        this.changed.emit(this.current);
    }
    ngOnInit (){

    }
}
