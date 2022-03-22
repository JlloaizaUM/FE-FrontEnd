import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageApiService } from '../services/get/page-api.service';


@Component({
  selector: 'app-modal-content',
  templateUrl: './restaurant-page.modal.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class NgbdModalContent{
  @Input() dish:any;

  constructor(public activeModal: NgbActiveModal) { }
  
}

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {

  page: any;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private apiservice: PageApiService,
  ) { }

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    let path = routeParams.get('restaurantPath');
    this.apiservice.getRestaurantData(path).subscribe(async (restaurant) => {
      this.page = restaurant;
    });

  }

  isPremium() {
    return false;
  }

  openModal(dish:any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.dish = dish;
  }

}
