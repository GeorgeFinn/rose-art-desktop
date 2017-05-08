import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth,  } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import 'rosefire';
import { environment } from '../../environments/environment.prod';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {

      //Subscribe to AuthState
      this.afAuth.authState.subscribe( (authState) => {
        if (authState) {
          console.log("AuthService: User is signed in");
          console.log("AuthService: authState: ", authState);
          //Userservice.updateUser
        } else {
          console.log("AuthService: User is NOT signed in");
        }
      });
    }

    get isSignedInStream(): Observable<boolean> {
      return this.afAuth.authState.map<firebase.User, boolean>( (authState) => {
        console.log(this.afAuth.authState);
        // return authState != null;
        return true;
      });
    }

  signInWithRosefire(): void {
    Rosefire.signIn(environment.rosefireRegistryToken, (error, rfUser: RosefireUser) => {
      if (error) {
        // User not logged in!
        console.error(error);
        return;
      }
      this.afAuth.auth.signInWithCustomToken(rfUser.token).then((auth) => {
        this.user = auth;
        this.router.navigate(['/']);  
      });
    });
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/signin']);
  }
}