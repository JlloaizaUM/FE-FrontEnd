import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';


import  auth  from 'firebase/app';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    
  }

 

}
