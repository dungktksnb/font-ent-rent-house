import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Apartment} from "../model/apartment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getApartment() {
    return this.http.get<Comment[]>('http://localhost:8080/comments');
  }

  findApartmentById(id: number) {
    return  this.http.get<Comment>(`http://localhost:8080/comments/${id}`);
  }

  createApartment(comment: any) {
    return this.http.post<Comment>('http://localhost:8080/comments', comment);
  }

  editApartment(id: number, comment: Comment) {
    return this.http.put<Apartment>(`http://localhost:8080/comments/${id}`,comment);
  }

  deleteApartment(id: number) {
    return this.http.delete<Comment>(`http://localhost:8080/comments/${id}`);
  }
}
