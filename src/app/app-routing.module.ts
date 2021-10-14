import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./form-login/register/register.component";
import {LoginComponent} from "./form-login/login/login.component";

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./apartment/apartment.module').then(module => module.ApartmentModule)
  },
  // {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
