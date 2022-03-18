import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageApiService } from 'app/client-view/services/get/page-api.service';
import { ModalEditComponent } from './modal-edit.component';
import { ModalCreateComponent } from './modal-create.component';

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

  }

  isPremium() {
    return false;
  }

  uploadChanges(dish: any) {
    console.log(dish);
  }

  openDetailModal(dish: any) {
    const modalRef = this.modalService.open(ModalEditComponent);
    modalRef.componentInstance.dish = dish;
    modalRef.result.then(function (result) {
      console.log(result);
    });
  }

  openEditModal(dish: any) {
    const modalRef = this.modalService.open(ModalEditComponent);

    modalRef.componentInstance.dish = dish;


    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(this.page.categories);
      let index = this.page.categories.findIndex(cat => cat.name === receivedEntry.cat)
      let index2 = this.page.categories[index].dishes.findIndex(plato => plato.id === receivedEntry.id);

      this.page.categories[index].dishes[index2] = receivedEntry;
      
      console.log(this.page.categories[index].dishes[index2]);
    });
  }

  openCreateModal() {
    const modalRef = this.modalService.open(ModalCreateComponent);
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {

      console.log(receivedEntry);
      this.page.categories[0].dishes.push(receivedEntry);
    });
  }

  create(){
    
  }
}
