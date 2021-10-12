import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApartmentService} from "../../apartmentService/apartment.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.css']
})
export class EditApartmentComponent implements OnInit {
  formGroup!: FormGroup;
  title = 'uploadFile';
  @ViewChild('uploadFile', {static: true}) public avatarDom: ElementRef | undefined;
  selectedImg: any = [];
  arrayPicture: String[] = [];

  constructor(private storage: AngularFireStorage, private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router, private apartmentService: ApartmentService) {
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
    this.activatedRoute.params.subscribe((data) => this.formGroup.value.id = data.id)
    this.showEdit(this.formGroup.value.id)
  }

  showEdit(id: number) {
    this.apartmentService.findApartmentById(id).subscribe((data) => {
      this.formGroup.get('images')?.setValue(data.images);
      this.formGroup.get('address')?.setValue(data.address);
      this.formGroup.get('bathroom')?.setValue(data.bathroom);
      this.formGroup.get('bedroom')?.setValue(data.bedroom);
      this.formGroup.get('city')?.setValue(data.city);
      this.formGroup.get('description')?.setValue(data.description);
      this.formGroup.get('district')?.setValue(data.district);
      this.formGroup.get('name')?.setValue(data.name);
      this.formGroup.get('numberView')?.setValue(data.numberView);
      this.formGroup.get('price')?.setValue(data.price);
      this.formGroup.get('status')?.setValue(data.status);
      this.formGroup.get('ward')?.setValue(data.ward);
      this.formGroup.get('typeApartmentId')?.setValue(data.typeApartmentId);
      this.formGroup.get('usersId');
    })
  }

  saveApartment() {
    this.apartmentService.editApartment(this.formGroup.value.id, this.formGroup.value).subscribe((data) => {
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
            console.log(url);
          })))
        ).subscribe();
      }
    }
  }
}
