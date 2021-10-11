import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Apartment} from "../model/apartment";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  formGroup!: FormGroup;
  apartments: Apartment[] = [];


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.ApartmentShow();
    this.formGroup = new FormGroup({
      images: new FormControl(),
      address: new FormControl(),
      bathroom: new FormControl(),
      bedroom: new FormControl(),
      city: new FormControl(),
      description: new FormControl(),
      district: new FormControl(),
      name: new FormControl(),
      numberView: new FormControl(),
      price: new FormControl(),
      ward: new FormControl(),
      typeApartmentId: new FormControl(),
      usersId: new FormControl(),
    })
  }

  ApartmentShow() {
    this.http.get<Apartment[]>('http://localhost:8080/apartment').subscribe((data) => {
        this.apartments = data;
      }
    )
  }

}
