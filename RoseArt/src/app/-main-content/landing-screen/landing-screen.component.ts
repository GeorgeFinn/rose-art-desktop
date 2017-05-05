import { Component, OnInit } from '@angular/core';
// import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from "angularfire2";

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {

  // public mapUrl: FirebaseObjectObservable<String>;

  constructor() {
  }

  // constructor(private af: AngularFire) {
  //   this.mapUrl = this.af.database.object("/map-photo");
  // }

  ngOnInit() {
  }

}
