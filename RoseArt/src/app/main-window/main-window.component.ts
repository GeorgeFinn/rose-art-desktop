import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {

  public showLanding: boolean = true;
  public showProfile: boolean = false;
  public showDirectory: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleLeft() {
    console.log("toggled left");
    this.showDirectory = !this.showDirectory;
    console.log(this.showDirectory);
  }

  toggleRight() {
     console.log("toggled right");
     this.showLanding = false;
     this.showProfile = !this.showProfile;
    console.log(this.showProfile);
  }

  showRight() {
    return !(this.showDirectory || this.showProfile);
  }

  signOut() {
    console.log("signing out");
  }

}
