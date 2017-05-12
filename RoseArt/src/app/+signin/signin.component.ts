import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { trigger, keyframes, animate, transition, style, NgZone} from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [
    trigger('wobble', [
      transition('inactive => active', animate(1000, keyframes([
        style({transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: .15}),
        style({transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: .30}),
        style({transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: .45}),
        style({transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: .60}),
        style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .75}),
        style({transform: 'none', offset: 1}),
      ]))),
    ])]
})
export class SigninComponent implements OnInit {
  public wobbleState: string;
 
  constructor(public authService: AuthService, public zone: NgZone) { }

  ngOnInit() {
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
