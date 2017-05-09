import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slide-show-preview',
  templateUrl: './slide-show-preview.component.html',
  styleUrls: ['../slide-show.component.scss']
})
export class SlideShowPreviewComponent {

  @Input() public pic;
  constructor(){
  }
  ngAfterViewInit(){
  }

}
