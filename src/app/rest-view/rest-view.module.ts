import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestEditComponent } from './rest-edit/rest-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [RestEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule
  ]
})
export class RestViewModule { }
