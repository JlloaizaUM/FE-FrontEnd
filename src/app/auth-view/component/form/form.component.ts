import { Component, OnInit, Input} from '@angular/core';
//import { auth} from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() action:String; 
  email = 'cristian@afdju.com';
  password = '12345'

  
  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {
    console.log(this.action);
  }

  LoginWithGoogle(){
    //this.auth.auth.signInWitPopup(new auth.GoogleAuthProvaider);
  }

}
