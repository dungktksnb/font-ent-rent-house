import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Apartment} from "../model/apartment";
import {Bill} from "../model/bill";

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient, private router: Router) {

  }

  createApartment(bill: any) {
    return this.http.post<Bill>('http://localhost:8080/bills', bill);
  }

  sendEmail(email: any) {
    return this.http.post<Bill>('http://localhost:8080/emails', email);
  }
}
