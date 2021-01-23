import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderMenuComponent } from './shared/header-menu/header-menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CommonModule } from '@angular/common';
import { AppLandingComponent } from './components/app-landing/app-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLandingComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMenuComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
