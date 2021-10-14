import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartmentRoutingModule } from './apartment-routing.module';
import { CreateApartmentComponent } from './create-apartment/create-apartment.component';
import {ApartmentComponent} from "./apartment.component";
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditApartmentComponent} from "./edit-apartment/edit-apartment.component";
import { CommentComponent } from './comment/comment.component';
import {BillComponent} from "./bill/bill.component";


@NgModule({
  declarations: [
    ApartmentComponent,
    CreateApartmentComponent,
    ApartmentDetailsComponent,
    EditApartmentComponent,
    CommentComponent,BillComponent
  ],
  exports: [
    ApartmentComponent,
    ApartmentDetailsComponent,
    CreateApartmentComponent,
  ],
  imports: [
    CommonModule,
    ApartmentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ApartmentModule { }
