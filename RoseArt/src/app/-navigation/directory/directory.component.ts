import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

   public options = [1, 2, 3, 4, 5, 6, 7];
   public showHallsMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  launchDashboard() {
    console.log("launched dashboard");
  }

  launchSculptures() {
    console.log("launched sculptures");
  }

  launchAppScreen() {
    console.log("launched app screen");
  }

  toggleHallsMenu() {
    console.log("clicked on menu");
    this.showHallsMenu = !this.showHallsMenu;
    console.log(this.showHallsMenu);
  }

  launchOlin() {
    console.log("olin");
  }

  launchMyers() {
    console.log("myers");
  }

  launchMoench() {
    console.log("moench");
  }

  launchCrappo() {
    console.log("crappo");
  }
}
