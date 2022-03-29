import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { PageApiService } from 'app/client-view/services/get/page-api.service';
import { ModalEditComponent } from './modal-edit.component';
import { ModalCreateComponent } from './modal-create.component';
import { UploadDishService } from '../services/upload-dish.service';
import { DeleteDishService } from '../services/delete-dish.service';

@Component({
  selector: 'app-rest-edit',
  templateUrl: './rest-edit.component.html',
  styleUrls: ['./rest-edit.component.css']
})
export class RestEditComponent implements OnInit {

  page: any;
  selectedTab: number = 0;
  path: string;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private getRestaurantService: PageApiService,
    private uploadDishService: UploadDishService,
    private deleteDishService: DeleteDishService
  ) { }

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.path = routeParams.get('restaurantPath');
    this.getRestaurants();
  }

  getRestaurants() {
    this.getRestaurantService.getRestaurantData(this.path).subscribe((restaurant) => {
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
    });
  }

  openEditModal(dish: any) {
    const modalRef = this.modalService.open(ModalEditComponent);

    modalRef.componentInstance.dish = dish;

    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.uploadDishService.updateDish(
        receivedEntry,
        this.page.restaurant.id).subscribe(dish => {
          this.getRestaurants();
        })
    });
  }

  openCreateModal() {
    const modalRef = this.modalService.open(ModalCreateComponent);
    modalRef.componentInstance.pageID = this.page.restaurant.id;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {

      this.uploadDishService.uploadDish(
        receivedEntry,
        this.page.restaurant.id,
        this.page.categories[this.selectedTab].name).subscribe(dish => {
          this.getRestaurants();
        })
    });
  }

  onTabChange(event: NgbTabChangeEvent) {
    this.selectedTab = +event.nextId;
  }

  clickMethod(dish:any) {
    if(confirm("¿Estás seguro que deseas eliminar este plato?")) {
      this.deleteDishService.deleteDish(dish, this.page.restaurant.id).subscribe();
      this.getRestaurants();
    }
  }
}
