import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthViewRoutingModule } from './auth-view-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthViewRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthViewModule { }
