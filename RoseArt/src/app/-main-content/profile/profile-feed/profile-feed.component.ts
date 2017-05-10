import { Art } from './../../../art.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.scss']
})
export class ProfileFeedComponent implements OnInit {

  @Input() public feed: Array<Art> = [];
  @Input() current;
  @Output() changed = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  isCurrent (_ind){
      return parseInt(this.current) === parseInt(_ind+1);
  }
  resetCurrent (_ind) {
      this.current = parseInt(_ind+1);
      this.changed.emit(this.current);
  }
}
