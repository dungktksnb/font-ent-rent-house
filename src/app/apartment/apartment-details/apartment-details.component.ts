import {Component, OnInit} from '@angular/core';
import {Apartment} from "../../model/apartment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ApartmentService} from "../../apartmentService/apartment.service";

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {
  details!: Apartment;
  id!: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private apartmentService: ApartmentService) {

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

}
