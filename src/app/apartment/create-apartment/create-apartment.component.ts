import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Apartment} from "../../model/apartment";
import {ApartmentService} from "../../service/apartment.service";


@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.css']
})
export class CreateApartmentComponent implements OnInit {
  formGroup!: FormGroup;
  @ViewChild('uploadFile', {static: true}) public avatarDom: ElementRef | undefined;
  selectedImg: any = [];
  arrayPicture: String[] = [];

  constructor(private storage: AngularFireStorage,
              private http: HttpClient,
              private router: Router,
              private apartmentService: ApartmentService) {

  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      images: new FormControl(this.uploadFileImg()),
      address: new FormControl(),
      bathroom: new FormControl(),
      bedroom: new FormControl(),
      city: new FormControl(),
      description: new FormControl(),
      district: new FormControl(),
      name: new FormControl(),
      numberView: new FormControl(),
      price: new FormControl(),
      status: new FormControl(true),
      ward: new FormControl(),
      typeApartmentId: new FormControl(),
      usersId: new FormControl()           // hỏi toàn
    })
  }

  createApartment() {
    let images = [];
    for (const image of this.arrayPicture) {
      images.push({nameUrl: image});
    }
    this.arrayPicture.splice(0, 1);
    let apartment = {
      images: images,
      name: this.formGroup.get('name')?.value,
      address: this.formGroup.get('address')?.value,
      ward: this.formGroup.get('ward')?.value,
      district: this.formGroup.get('district')?.value,
      city: this.formGroup.get('city')?.value,
      bathroom: this.formGroup.get('bathroom')?.value,
      bedroom: this.formGroup.get('bedroom')?.value,
      description: this.formGroup.get('description')?.value,
      price: this.formGroup.get('price')?.value,
      status: this.formGroup.get('status')?.value,
      numberView: this.formGroup.get('numberView')?.value,
      users: {
        id: 1,
      },
      typeApartment: {
        id: 1
      }
    }

    this.apartmentService.createApartment(apartment).subscribe((data) => {
      this.router.navigate(['']);
    })
  }

  uploadFileImg() {
    for (const argument of this.avatarDom?.nativeElement.files) {
      this.selectedImg.push(argument)
    }
    this.submit();
  }

  submit() {
    for (let file of this.selectedImg) {
      if (file != null) {
        const filePath = file.name;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, file).snapshotChanges().pipe(
          finalize(() => (fileRef.getDownloadURL().subscribe(url => {
            this.arrayPicture.push(url);
          })))
        ).subscribe();
      }
    }
  }
}
