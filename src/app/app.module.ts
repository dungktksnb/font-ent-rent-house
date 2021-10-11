import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent, NavBarModule} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ApartmentComponent} from './apartment/apartment.component';
import {LoginComponent} from './form-login/login/login.component';
import {RegisterComponent} from './form-login/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {httpInterceptorProviders} from "./service/auth-interceptor";
import {RouterModule, Routes} from "@angular/router";
import {LogoutComponent} from './form-login/logout/logout.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {HomeComponent} from './home/home.component';
import firebase from "firebase/compat";
import { UserComponent } from './model/user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import Firestore = firebase.firestore.Firestore;

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApartmentComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    HomeComponent,
    UserComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NavBarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {useHash: false}),
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    // MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    // NgxAudioPlayerModule,
    MatInputModule,
    MatFormFieldModule,
    // FooterModule,
    Firestore
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
