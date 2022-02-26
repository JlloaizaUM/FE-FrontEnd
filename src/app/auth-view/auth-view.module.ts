import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthViewRoutingModule } from './auth-view-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [SigninComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthViewRoutingModule
  ]
})
export class AuthViewModule { }
