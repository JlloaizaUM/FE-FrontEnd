import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterClientComponent } from './register-client/register-client.component';
import { SigninComponent } from './signin/signin.component';

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
      }
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthViewRoutingModule { }
