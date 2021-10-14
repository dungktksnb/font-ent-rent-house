import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Apartment} from "../model/apartment";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getApartment() {
    return this.http.get<User[]>('http://localhost:8080/users');
  }

  findApartmentById(id: number) {
    return  this.http.get<User>(`http://localhost:8080/users/${id}`);
  }

  createApartment(user: any) {
    return this.http.post<User>('http://localhost:8080/users', user);
  }

  editApartment(id: number, user: User) {
    return this.http.put<User>(`http://localhost:8080/users/${id}`,user);
  }

  deleteApartment(id: number) {
    return this.http.delete<User>(`http://localhost:8080/users/${id}`);
  }
}
