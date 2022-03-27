import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthViewRoutingModule } from './auth-view-routing.module';
import { SigninComponent } from './signin/signin.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './component/form/form.component';
@NgModule({
  declarations: [
    SigninComponent,
    RegisterClientComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    FormComponent,
    
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
