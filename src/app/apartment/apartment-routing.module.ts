import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateApartmentComponent} from "./create-apartment/create-apartment.component";
import {ApartmentComponent} from "./apartment.component";
import {ApartmentDetailsComponent} from "./apartment-details/apartment-details.component";
import {BillComponent} from "./bill/bill.component";
import {CommentComponent} from "./comment/comment.component";

const routes: Routes = [
  {
    path: '', component: ApartmentComponent,
  },
  {
    path: 'details/:id', component: ApartmentDetailsComponent,
  },
  {
    path: 'create', component: CreateApartmentComponent,
  },
  {
    path: 'bill', component: BillComponent,
  },
  {
    path: 'comment', component: CommentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentRoutingModule {
}
