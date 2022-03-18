import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css']
})
export class ModalCreateComponent implements OnInit {

  nDish:any = {
    name:'Nombre del plato',
    descripcion:'Descripción',
    precio:'0',
    url:''
  };

  @Input() cat:any;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {}

  sendChanges() {
    this.passEntry.emit(this.nDish);
    this.activeModal.close('Close click');
  }

  onClose(){
    this.activeModal.close('Close click');
  }

}
