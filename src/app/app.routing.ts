import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SigninComponent } from './auth-view/signin/signin.component';
import { LandingComponent } from './client-view/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ForgotPasswordComponent } from './auth-view/forgot-password/forgot-password.component';
import { RestaurantPageComponent } from './client-view/restaurant-page/restaurant-page.component';
import { PageNotFoundComponent } from './client-view/page-not-found/page-not-found.component';


const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signin',           component: SigninComponent },
    { path: 'forgot-password',  component: ForgotPasswordComponent},
    { path: 'landing',                  component: LandingComponent },
    { path: 'nucleoicons',              component: NucleoiconsComponent },
    { path: 'restaurant/:restaurantId', component: RestaurantPageComponent},
    { path: 'restaurant',               component: RestaurantPageComponent},
    { path: '**',                       component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
