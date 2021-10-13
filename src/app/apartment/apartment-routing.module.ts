import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateApartmentComponent} from "./create-apartment/create-apartment.component";
import {ApartmentComponent} from "./apartment.component";
import {ShowApartmentComponent} from "./show-apartment/show-apartment.component";
import {ApartmentDetailsComponent} from "./apartment-details/apartment-details.component";

const routes: Routes = [
  {
    path: '', component: ApartmentComponent, pathMatch: 'full',
  },
  {
    path: 'details/:id', component: ApartmentDetailsComponent,
  },
  {
    path: 'create', component: CreateApartmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentRoutingModule {
}
