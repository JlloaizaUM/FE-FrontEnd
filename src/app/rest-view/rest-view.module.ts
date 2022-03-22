import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestEditComponent } from './rest-edit/rest-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalEditComponent } from './rest-edit/modal-edit.component';
import { ModalCreateComponent } from './rest-edit/modal-create.component';
import { PanelConfigComponent } from './panel-config/panel-config.component';



@NgModule({
  declarations: [RestEditComponent, ModalEditComponent, ModalCreateComponent, PanelConfigComponent],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule
  ]
})
export class RestViewModule { }
