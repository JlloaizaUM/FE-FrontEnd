import { Component, OnInit } from '@angular/core';
import { RegisterApiService } from '../services/post/register-api.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  registrar = {
    email: '',
    password: ''
  }

  register(){
    this.apiService.postRegister(this.registrar)
  }

  constructor(
    private apiService: RegisterApiService
  ) { }

  ngOnInit(): void {
  }

}
