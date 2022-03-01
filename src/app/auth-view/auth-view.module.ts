import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthViewRoutingModule } from './auth-view-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterClientComponent } from './register-client/register-client.component';


@NgModule({
  declarations: [
    SigninComponent, 
    ForgotPasswordComponent, 
     RegisterClientComponent
  ],
  imports: [
    CommonModule,
    AuthViewRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthViewModule { }
