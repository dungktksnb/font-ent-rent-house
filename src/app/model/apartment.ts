export class Apartment {
  id!: number;
  images!: any[];
  address!: String;
  bathroom!: number;
  bedroom!: number;
  city!: String;
  description!: String;
  district!: String;
  name!: String;
  numberView!: number;
  price!: number;
  status!: String;
  ward!: String;
  typeApartmentId!: number;
  usersId!: number;


  constructor(id: number, images: any[], address: String, bathroom: number, bedroom: number, city: String, description: String, district: String, name: String, numberView: number, price: number, status: String, ward: String, typeApartmentId: number, usersId: number) {
    this.id = id;
    this.images = images;
    this.address = address;
    this.bathroom = bathroom;
    this.bedroom = bedroom;
    this.city = city;
    this.description = description;
    this.district = district;
    this.name = name;
    this.numberView = numberView;
    this.price = price;
    this.status = status;
    this.ward = ward;
    this.typeApartmentId = typeApartmentId;
    this.usersId = usersId;
  }
}
