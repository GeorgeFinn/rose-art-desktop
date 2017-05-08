import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'slide-show-control',
  templateUrl: './slide-show-control.component.html',
  styleUrls: ['../slide-show.component.scss']
})
export class SlideShowControlComponent {

    @Input() public maximum;
    @Input() public current;
    @Output() changed = new EventEmitter();
    constructor(){

    }
    resetCurrent(_num){
        this.changed.emit(_num);
    }
}
