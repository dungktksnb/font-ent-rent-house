import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../model/comment";
import {environment} from "../../environments/environment";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
const API_URL = `${environment.apiUrl}`;

export class CommentService {
  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get<Comment[]>(API_URL + '/comments');
  }

  save(comment: Comment) {
    return this.http.post<Comment>(API_URL + '/comments', comment);
  }

  update(id: number, comment: Comment) {
    return this.http.put<Comment>(`${API_URL}/comments/${id}`, comment);
  }

  findById(id: number) {
    return this.http.get<Comment>(`${API_URL}/comments/${id}`);
  }

  delete(id: number) {
    return this.http.delete<Comment>(`${API_URL}/comments/${id}`);
  }
}
