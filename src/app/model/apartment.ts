import {TypeApartment} from "./type-apartment";
import {Images} from "./images";

export interface Apartment {
  id?: number;
  images?: any;
  address?: string;
  bathroom?: number;
  bedroom?: number;
  city?: string;
  description?: string;
  district?: string;
  name?: string;
  numberView?: number;
  price?: number;
  status?: string;
  ward?: string;
  typeApartmentId?: any;
  usersId?: number;

}
