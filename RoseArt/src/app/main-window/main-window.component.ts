import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {

  public showLanding: boolean = true;
  public showProfile: boolean = false;
  public showDirectory: boolean = false;
  public content = "landing";

  constructor() { }

  ngOnInit() {
  }

  toggleLeft() {
    this.showDirectory = !this.showDirectory;
  }

  toggleRight() {
    this.showLanding = false;
     this.showProfile = !this.showProfile;
  }

  showRight() {
    return !(this.showDirectory || this.showProfile);
  }

}
