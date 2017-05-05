import { ArtDetailComponent } from './-main-content/art-detail/art-detail.component';
import { ProfileComponent } from './-main-content/profile/profile.component';
import { MobileInfoComponent } from './+mobile-info/mobile-info.component';
import { AboutComponent } from './+about/about.component';
import { SculpturesComponent } from './-main-content/sculptures/sculptures.component';
import { HallCompComponent } from './-main-content/hall-comp/hall-comp.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from "./+signin/signin.component";
import { LandingScreenComponent } from './-main-content/landing-screen/landing-screen.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/',
    pathMatch: 'full'
  },
  {
    path: 'main/:content',
    component: MainWindowComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
      },
      {
        path: 'landing',
        component: LandingScreenComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'halls',
        component: HallCompComponent
      },
      {
        path: 'hall/:name',
        component: HallCompComponent
      },
      {
        path: 'sculptures',
        component: SculpturesComponent
      },
      {
        path: 'art-detail/:name',
        component: ArtDetailComponent
      },
    ]
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'mobile',
    component: MobileInfoComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
