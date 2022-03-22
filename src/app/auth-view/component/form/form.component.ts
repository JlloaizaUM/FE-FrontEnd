import { Component, OnInit, Input} from '@angular/core';


import { AngularFireAuth } from '@angular/fire/auth';
//import  auth  from 'firebase/app';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() action:string; 

 

  
  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {
    console.log(this.action);
  }

  

}
