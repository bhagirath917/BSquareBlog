import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLandingComponent } from './components/app-landing/app-landing.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: AppLandingComponent
  },
  {
    path: '\profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
