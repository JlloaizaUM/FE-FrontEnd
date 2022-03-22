import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SigninComponent } from './auth-view/signin/signin.component';
import { LandingComponent } from './client-view/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { RestEditComponent } from './rest-view/rest-edit/rest-edit.component';
import { RegisterClientComponent } from './auth-view/register-client/register-client.component';
import { ForgotPasswordComponent } from './auth-view/forgot-password/forgot-password.component';
import { RestaurantPageComponent } from './client-view/restaurant-page/restaurant-page.component';
import { PageNotFoundComponent } from './client-view/page-not-found/page-not-found.component';
import { PanelConfigComponent } from './rest-view/panel-config/panel-config.component';




const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: 'restaurant/:restaurantPath', component: RestaurantPageComponent },
  { path: 'restaurant/:restaurantPath/edit', component: RestEditComponent },
  { path: 'register-client', component: RegisterClientComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'panel-config', component: PanelConfigComponent},
  { path: '**', component: PageNotFoundComponent },
  

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
