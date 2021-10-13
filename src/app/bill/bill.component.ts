import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ApartmentService} from "../apartmentService/apartment.service";
import {Bill} from "../model/bill";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bill!: Bill;
  userId!: number;
  apartmentId!: number;

  constructor(private http: HttpClient, router: Router, apartmentService: ApartmentService,) {
  }

  ngOnInit(): void {
  }

  getBill() {
    this.http.get<Bill>('')
  }
}
