import { MainWindowComponent } from './main-window/main-window.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MainComponent } from './+main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from "./+signin/signin.component";

const routes: Routes = [
  { path: '', component: MainWindowComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
