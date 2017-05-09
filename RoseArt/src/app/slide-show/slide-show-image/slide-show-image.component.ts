import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slide-show-image',
  templateUrl: './slide-show-image.component.html',
  styleUrls: ['../slide-show.component.scss']
})
export class SlideShowImageComponent implements OnInit {

   @Input() public art;
    constructor(){
    }
    ngOnInit (){
    }
}
