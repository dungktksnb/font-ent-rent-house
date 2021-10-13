import {User} from "./user";
import {Apartment} from "./apartment";

export interface Bill {
  id?: number;
  users?: User;
  startDay?: number;
  endDay?: number;
  total?: number;
  apartment?: Apartment;
}
