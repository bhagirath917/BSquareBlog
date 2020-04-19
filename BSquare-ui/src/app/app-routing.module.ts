import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLandingComponent } from './components/app-landing/app-landing.component';


const routes: Routes = [
  {
    path: '',
    component: AppLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
