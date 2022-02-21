import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { ClientViewRoutingModule } from './client-view-routing.module';
import { LandingComponent } from './landing/landing.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    LandingComponent,
    RestaurantPageComponent
  ]
})
export class ClientViewModule { }
