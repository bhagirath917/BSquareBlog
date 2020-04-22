import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLandingRoutingModule } from './app-landing-routing.module';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { AppLandingComponent } from './app-landing.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HeaderMenuComponent } from 'src/app/shared/header-menu/header-menu.component';


@NgModule({
  declarations: [
    AppLandingComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMenuComponent
  ],
  imports: [
    CommonModule,
    AppLandingRoutingModule
  ]
})
export class AppLandingModule { }
