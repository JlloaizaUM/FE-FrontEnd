import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthViewRoutingModule { }
