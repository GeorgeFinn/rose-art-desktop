import { Art } from './../../art.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-hall-comp',
  templateUrl: './hall-comp.component.html',
  styleUrls: ['./hall-comp.component.css']
})
export class HallCompComponent implements OnDestroy {

  public hallName: string;
  // public pieces:Array<Art> = [];
  public pieces: FirebaseListObservable<Art[]>;
  private routerSubscription: Subscription;

  constructor(
    private af: AngularFireDatabase,
    private route: ActivatedRoute) {
    
    // Router params DO NOT NEED to unsubscribe later
    this.routerSubscription = this.route.params.subscribe( (params: Params) => {
      this.hallName  = params["name"];
    });

    var location = '/' + this.hallName;
    this.pieces = af.list(location);

    console.log(location);
   }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  // ngOnInit() {
  //   this.populate();
  // }

  //  populate(): void {
  //   var nameOfPicFolder = '../../assets/images/' + this.hallName;
  //   var noOfPics = 2;
  //   var counter = 1;
  //   var tempArt: Art;
  //   while (counter <= noOfPics) {
  //       tempArt = new Art();
  //       tempArt.author = 'author: ' + counter;
  //       tempArt.title = 'title: ' + counter;
  //       tempArt.url = nameOfPicFolder + '/painting' + counter + '.png';
  //       this.pieces.push(tempArt);
  //       counter++;
  //   }
  // }
}
