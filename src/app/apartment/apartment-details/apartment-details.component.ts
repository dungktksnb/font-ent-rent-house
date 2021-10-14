import {Component, OnInit} from '@angular/core';
import {Apartment} from "../../model/apartment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ApartmentService} from "../../service/apartment.service";
import {BillService} from "../../service/bill.service";
import {Bill} from "../../model/bill";

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {
  details!: Apartment;
  id!: number;
  idOwner!: number;
  idClient!: number;
  bill!: Bill;

  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private apartmentService: ApartmentService,
              private billService: BillService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.id = res.id;
    });
    this.ApartmentDetails(this.id);
  }

  ApartmentDetails(id: number) {
    this.apartmentService.findApartmentById(id).subscribe((data) => {
      this.details = data;
    })
  }

  getBill() {
    // this.billService.showBill();
  }

  total(startDay:number, endDay:number, idClient:number){
    // this.billService
  }

}
