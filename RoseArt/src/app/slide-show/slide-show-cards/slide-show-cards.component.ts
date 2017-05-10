import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slide-show-cards',
  templateUrl: './slide-show-cards.component.html',
  styleUrls: ['../slide-show.component.scss']
})
export class SlideShowCardsComponent implements OnInit {

    @Input() public numItems;
    @Input() public folder;
    @Input() public current;
    @Input() public gallery;
    constructor (){
        // If you want to add items to the list upon construction of the child,
        // use the ngOnInit() hook (not the constructor(),
        // since the data-bound properties aren't initialized at that point)
    }
    isCurrent(_ind){
        return parseInt(this.current) === parseInt(_ind+1);
    }
    ngOnInit (){
    }

}
