import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { ClientViewRoutingModule } from './client-view-routing.module';
import { LandingComponent } from './landing/landing.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
    LandingComponent,
    RestaurantPageComponent,
    PageNotFoundComponent,
  ]
})
export class ClientViewModule { }
