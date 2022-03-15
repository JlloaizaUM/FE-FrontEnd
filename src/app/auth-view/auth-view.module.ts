import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthViewRoutingModule } from './auth-view-routing.module';
import { SigninComponent } from './signin/signin.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SigninComponent,
    RegisterClientComponent,
    ForgotPasswordComponent,
    
  ],
  imports: [
    CommonModule,
    AuthViewRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule
    
  ]
})
export class AuthViewModule { }
