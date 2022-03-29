import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterClientComponent } from './register-client/register-client.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from 'app/shared/guard/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
const routes: Routes = [
  { path: '',
    data: {
      title: 'auth-view'
    },
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        data:{
          title: 'signin'
        }
        
      },
      {
        path:'register-client',
        component: RegisterClientComponent,
        data:{
        title:'register-client'
      },
     
      },
      {
        path: 'dashboard', 
        component: DashboardComponent, canActivate: [AuthGuard],
        data:{title:'dashboard'}
        
      },
      {
        path: 'verify-email-address', 
        component: VerifyEmailComponent,
        data:{title:'verify-email-address'} 
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthViewRoutingModule { }
