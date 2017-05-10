import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.scss']
})
export class ProfileCardsComponent implements OnInit {

 @Input() public numItems;
  @Input() public folder;
  @Input() public current;
  @Input() public feed;

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
