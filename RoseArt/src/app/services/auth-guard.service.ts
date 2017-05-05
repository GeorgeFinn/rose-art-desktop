import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router:  Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return this.authService.isSignedInStream.map<boolean, boolean>((isSignedInStream: boolean) => {
        console.log("Auth Guard: isSignedIn: ", isSignedInStream);
        if(!isSignedInStream) {
          this.router.navigate(['/signin']);
        }
        return isSignedInStream;
      });
  }

}
