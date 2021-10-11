import {Component, OnInit} from '@angular/core';
import {Apartment} from "../../model/apartment";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {
  formGroup!: FormGroup;
  details!: Apartment;
  id!: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.id = res.id;
    });
    this.ApartmentDetails(this.id);
    this.formGroup= new FormGroup({
      images: new  FormControl(),
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

  ApartmentDetails(id: number) {
    this.http.get<Apartment>(`http://localhost:8080/apartment/${id}`).subscribe((data) => {
      console.log(data)
      this.details = data;
    })
  }

}
