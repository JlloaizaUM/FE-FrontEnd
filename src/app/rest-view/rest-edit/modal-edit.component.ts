import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  priceEdit: boolean = false;
  nameEdit: boolean = false;
  descEdit: boolean = false;
  notNumber: boolean = false;

  editableDish: any;

  @Input() dish: any;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() { this.editableDish = Object.assign({}, this.dish); }

  onPriceEdit() {
    if (this.editableDish.precio) {
      this.priceEdit = !this.priceEdit;
      this.notNumber = false;
    } else {
      this.notNumber = true;
    }

  }

  onNameEdit() {
    this.nameEdit = !this.nameEdit;
  }

  onDescEdit() {
    this.descEdit = !this.descEdit;
  }

  sendChanges() {
    if (JSON.stringify(this.editableDish) !== JSON.stringify(this.dish)) {
      this.passEntry.emit(this.editableDish);
    }
    this.activeModal.close('Close click');
  }
}
