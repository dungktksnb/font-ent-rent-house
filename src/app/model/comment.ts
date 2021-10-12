import {Apartment} from "./apartment";
import {User} from "./user";

export class Comment {
  id!: number;
  content!: string;
  user!: User;
  apartment!: Apartment;


  constructor(id: number, content: string, user: User, apartment: Apartment) {
    this.id = id;
    this.content = content;
    this.user = user;
    this.apartment = apartment;
  }

}
