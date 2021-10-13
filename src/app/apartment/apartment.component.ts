import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Apartment} from "../model/apartment";
import {FormControl, FormGroup} from "@angular/forms";
import {ApartmentService} from "../apartmentService/apartment.service";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  formGroup!: FormGroup;
  apartments!: Apartment[];


  constructor(private http: HttpClient, private apartmentService: ApartmentService) {
  }

  ngOnInit(): void {
    this.apartmentService.getApartment().subscribe((data) => {
      console.log(data)
      this.apartments = data;
      console.log(this.apartments)
    })
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

  // ApartmentShow() {
  //   this.http.get<Apartment[]>('http://localhost:8080/apartment').subscribe((res: any) => {
  //
  //       this.apartments = res;
  //       console.log(this.apartments);
  //     }
  //   )
  // }

}
