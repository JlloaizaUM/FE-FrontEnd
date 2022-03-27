import { Component, OnInit, Input } from '@angular/core';
import { RegisterApiService } from '../services/post/register-api.service';

import { AngularFireAuth } from '@angular/fire/auth';
import  auth  from 'firebase/app';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  @Input() action:string;

  test: Date = new Date();
  focus;
  focus1;
  
  usuario = {
    email: '',
    password: ''
  }

  Registrar() {

    console.log(this.usuario);

  }

  

  constructor(
    private apiService: RegisterApiService,
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    
  }
  LoginWithGoogle(){
    this.auth.signInWithPopup(new auth.auth.GoogleAuthProvider);
  }
 

}
