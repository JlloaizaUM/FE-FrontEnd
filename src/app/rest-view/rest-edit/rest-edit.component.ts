import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PageApiService } from 'app/client-view/services/get/page-api.service';


@Component({
  selector: 'app-modal-content',
  templateUrl: './rest-modal-edit.modal.html',
  styleUrls: ['./rest-edit.component.css']
})
export class NgbdModalContent {
  @Input() dish: any;

  @Output() updatedDishEvent = new EventEmitter();

  @ViewChild("dishDescription") dishDescription: ElementRef;
  @ViewChild("dishName") dishName: ElementRef;
  @ViewChild("dishPrice") dishPrice: ElementRef;

  constructor(public activeModal: NgbActiveModal) { }

  changeTxt() {
    console.log(this.dishName.nativeElement.innerHTML);
  }

  sendChanges() {
    let updatedDish = {
      id: "",
      name: "",
      descripcion: "",
      precio: Number,
    };
    updatedDish.id = this.dish.id;
    updatedDish.name = this.dishName.nativeElement.innerHTML;
    updatedDish.descripcion = this.dishDescription.nativeElement.innerHTML;
    updatedDish.precio = this.dishPrice.nativeElement.innerHTML;
    //console.log(updatedDish)
    this.activeModal.close(updatedDish);
  }

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


  }

  isPremium() {
    return false;
  }

  uploadChanges(dish: any) {
    console.log(dish);
  }

  openDetailModal(dish: any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.dish = dish;
    modalRef.result.then(function (result) {
      console.log(result);
    });
  }

  openEditModal(dish: any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.dish = dish;

    let newDish:any;
    modalRef.result.then(function (result) {
      newDish = result;
      
      //getDish(saveDishInDatabase, result);
    });

    let index = this.page.categories.findIndex( ({ id }) => id === dish.id);
    this.page.categories[index] = dish;

    console.log(newDish);
    console.log(this.page.categories[index]);
    
    /*
    var getDish = function (callback, dish) {
      // get the username somehow
      var username = dish;
      callback(username);
    };

    var saveDishInDatabase = function (dish, categories) {
      let index = categories.findIndex( ({ id }) => id === dish.id);
      categories[index] = dish;
    };
    */

    
  }

  openCreateModal(dish: any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.dish = dish;
    modalRef.result.then(function (result) {
      console.log(result);
    })
  }

}
