import { AuthService } from './../../services/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Art } from './../../art.model';
import { Component, OnInit } from '@angular/core';

import * as firebase from "firebase";

@Component({
  selector: 'app-sculptures',
  templateUrl: './sculptures.component.html',
})
export class SculpturesComponent {

  // public sculptures:Array<Art> = [];
  public sculptures: FirebaseListObservable<Art[]>;
  
  constructor(private af: AngularFireDatabase) {
    this.sculptures = af.list("/sculptures");
   }

  // ngOnInit() {
  //   this.populate();
  // }

  //  populate(): void {
  //   var nameOfPicFolder = '../../assets/images/sculptures';
  //   var noOfPics = 7;
  //   var counter = 1;
  //   var tempArt: Art;
  //   while (counter <= noOfPics) {
  //       tempArt = new Art();
  //       tempArt.author = 'author: ' + counter;
  //       tempArt.title = 'title: ' + counter;
  //       tempArt.url = nameOfPicFolder + '/art' + counter + '.jpg';
  //       this.sculptures.push(tempArt);
  //       counter++;
  //     }
  //   }
  }
