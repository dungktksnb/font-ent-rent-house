import {Injectable} from '@angular/core';
import {Apartment} from "../model/apartment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http: HttpClient) {
  }

  getApartment() {
    return this.http.get<Apartment[]>('http://localhost:8080/apartment');
  }

  findApartmentById(id: number) {
    return  this.http.get<Apartment>(`http://localhost:8080/apartment/${id}`);
  }

  createApartment(apartment: any) {
    return this.http.post<Apartment>('http://localhost:8080/apartment', apartment);
  }

  editApartment(id: number, apartment: Apartment) {
    return this.http.put<Apartment>(`http://localhost:8080/apartment/${id}`,apartment);
  }

  deleteApartment(id: number) {
    return this.http.delete<Apartment>(`http://localhost:8080/apartment/${id}`);
  }
}

