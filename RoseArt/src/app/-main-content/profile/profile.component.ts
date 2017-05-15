import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Art } from "app/art.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public favorites:Array<Art> = [];
  public current: number = 1;
  public numItems: number;
  private interval: any;

  constructor(public auth: AuthService) {
    console.log(this.auth.username);
   }

  ngOnInit() {
    this.populate();
    this.startTimer();
  }

  ngOnDestroy(): void {
      clearInterval(this.interval);
  }

   populate(): void {
    var nameOfPaintFolder = '../../assets/images/Olin';
    var nameOfSculpFolder = '../../assets/images/sculptures'
    var counter = 1;
    var tempArt: Art;
    var i;
    for (i = 0; i < 2; i++) {
      tempArt = new Art();
      tempArt.author = 'p-auth: ' + counter;
      tempArt.title = 'p-title: ' + counter;
      tempArt.url = nameOfPaintFolder + '/painting' + counter + '.png';
      this.favorites.push(tempArt);
      counter++;
    }
    counter=1;
    for (i = 0; i < 2; i++) {
      tempArt = new Art();
      tempArt.author = 's-auth: ' + counter;
      tempArt.title = 's-title: ' + counter;
      tempArt.url = nameOfSculpFolder + '/art' + counter + '.jpg';
      this.favorites.push(tempArt);
      counter++;
    }
    this.numItems = this.favorites.length;
   }
   
   startTimer():void {
      this.interval = setInterval(() => {
        if(this.current >= this.numItems) {
            this.current = 1;
        } else {
            this.current += 1;
        }
        }, 4000);
   }

    setCurrent(_newValue){
        this.current = _newValue;
    }
}
