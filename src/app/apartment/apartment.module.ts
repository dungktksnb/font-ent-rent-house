import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartmentRoutingModule } from './apartment-routing.module';
import { CreateApartmentComponent } from './create-apartment/create-apartment.component';
import {ApartmentComponent} from "./apartment.component";
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ApartmentComponent,
    CreateApartmentComponent,
    ApartmentDetailsComponent,
  ],
  exports: [
    ApartmentComponent
  ],
  imports: [
    CommonModule,
    ApartmentRoutingModule,
    FormsModule
  ]
})
export class ApartmentModule { }
