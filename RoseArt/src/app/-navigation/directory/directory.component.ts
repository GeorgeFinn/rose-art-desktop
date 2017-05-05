import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, keyframes, animate, transition, style, NgZone, state } from '@angular/core';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  animations: [
    trigger('wobble', [
      transition('inactive => active', animate(1000, keyframes([
        style({transform: 'translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: .15}),
        style({transform: 'translate3d(15%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: .30}),
        style({transform: 'translate3d(-10%, 0, 0) rotate3d(0, 0, 1, -2deg)', offset: .45}),
        style({transform: 'translate3d(5%, 0, 0) rotate3d(0, 0, 1, 1deg)', offset: .60}),
        style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .75}),
        style({transform: 'none', offset: 1}),
      ]))),
    ])
  ]
})
export class DirectoryComponent implements OnInit {

   public options = [1, 2, 3, 4, 5, 6, 7];
   public showHallsMenu: boolean = false;
   public wobbleState: string;

  constructor(router : Router, public zone: NgZone) { }

  ngOnInit() {
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

  triggerAnimation() {
    this.wobbleState = "active";
  }
 
  reset() {
    this.zone.run(() => {
      this.wobbleState = "inactive";
    });
  }
}
