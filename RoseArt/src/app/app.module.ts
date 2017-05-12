import { SlideShowCardsComponent } from './slide-show/slide-show-cards/slide-show-cards.component';
import { ArtCardComponent } from './slide-show/art-card/art-card.component';
import { SlideShowPreviewComponent } from './slide-show/slide-show-preview/slide-show-preview.component';
import { SlideShowPreviewsComponent } from './slide-show/slide-show-previews/slide-show-previews.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ProfileFabComponent } from './-navigation/profile-fab/profile-fab.component';
import { SculpturesComponent } from './-main-content/sculptures/sculptures.component';
import { TopBarComponent } from './-bars/top-bar/top-bar.component';
import { BottomBarComponent } from './-bars/bottom-bar/bottom-bar.component';
import { ProfileFeedComponent } from './-main-content/profile/profile-feed/profile-feed.component';
import { LeftBurgerComponent } from './-navigation/left-burger/left-burger.component';
import { DirectoryComponent } from './-navigation/directory/directory.component';
import { ProfileComponent } from './-main-content/profile/profile.component';
import { HallCompComponent } from './-main-content/hall-comp/hall-comp.component';
import { LandingScreenComponent } from './-main-content/landing-screen/landing-screen.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { SigninComponent } from './+signin/signin.component';
import * as firebase from 'firebase/app';
import { AboutComponent } from './+about/about.component';
import { MobileInfoComponent } from './-main-content/mobile-info/mobile-info.component';
import { PhotoCardComponent } from "app/-main-content/profile/profile-cards/photo-card/photo-card.component";
import { PhotoCardSimplifiedComponent } from "app/-main-content/profile/profile-feed/photo-card-simplified/photo-card-simplified.component";
import { ProfileCardsComponent } from "app/-main-content/profile/profile-cards/profile-cards.component";
import { HallsComponent } from "app/-main-content/halls/halls.component";


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MainWindowComponent,
    BottomBarComponent,
    TopBarComponent,
    LandingScreenComponent,
    HallCompComponent,
    ProfileFabComponent,
    ProfileComponent,
    ProfileFeedComponent,
    SculpturesComponent,
    ArtCardComponent,
    DirectoryComponent,
    LeftBurgerComponent,
    ProfileComponent,
    PhotoCardComponent,
    AboutComponent,
    MobileInfoComponent,
    PhotoCardSimplifiedComponent,
    SlideShowComponent,
    SlideShowCardsComponent,
    SlideShowPreviewsComponent,
    SlideShowPreviewComponent,
    ProfileCardsComponent,
    HallsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
