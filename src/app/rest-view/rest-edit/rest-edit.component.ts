import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageApiService } from 'app/client-view/services/get/page-api.service';


@Component({
  selector: 'app-modal-content',
  templateUrl: './rest-modal-edit.modal.html',
  styleUrls: ['./rest-edit.component.css']
})
export class NgbdModalContent {
  @Input() dish;

  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-rest-edit',
  templateUrl: './rest-edit.component.html',
  styleUrls: ['./rest-edit.component.css']
})
export class RestEditComponent implements OnInit {

  page: any;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private apiservice: PageApiService
  ) { }

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    let path = routeParams.get('restaurantPath');
    this.apiservice.getRestaurantData(path).subscribe((restaurant) => {
      this.page = restaurant;
    });
    console.log(this.page);
  }

  isPremium() {
    return false;
  }

  openModal(dish) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.dish = dish;
  }

}
