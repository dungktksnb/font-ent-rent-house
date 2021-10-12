import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowComponent} from "./comment/show/show.component";
import {CreateComponent} from "./comment/create/create.component";
import {EditComponent} from "./comment/edit/edit.component";
import {DeleteComponent} from "./comment/delete/delete.component";

const routes: Routes = [
  {
    path: 'apartment', loadChildren: () => import('./apartment/apartment.module').then(module => module.ApartmentModule)
  },
  {
    path:'comment-show', component: ShowComponent
  },
  {
    path:'comment-create', component: CreateComponent
  },
  {
    path:'comment-edit', component: EditComponent
  },
  {
    path:'comment-delete', component: DeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
