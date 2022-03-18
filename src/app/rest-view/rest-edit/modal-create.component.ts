import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css']
})
export class ModalCreateComponent implements OnInit {

  nDish:any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onClose(){
    this.activeModal.close('Close click');
  }

}
