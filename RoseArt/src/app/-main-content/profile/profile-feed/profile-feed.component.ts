import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.scss']
})
export class ProfileFeedComponent implements OnInit {

  public feed = [1, 2, 3];
  public url = "https://s-media-cache-ak0.pinimg.com/736x/f1/93/23/f19323b62698092e83ce456408ca0dc1.jpg";
  public title = "Self Made Man";
  public author = "Bobbie Carlyle";

  constructor() { }

  ngOnInit() {
  }
}
