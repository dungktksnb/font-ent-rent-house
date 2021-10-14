import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ApartmentService} from "../../service/apartment.service";
import {Bill} from "../../model/bill";
import {BillService} from "../../service/bill.service";
import {FormControl, FormGroup} from "@angular/forms";
import {DatepickerTriggerHarnessBase} from "@angular/material/datepicker/testing/datepicker-trigger-harness-base";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bill!: FormGroup;
  apartmentId!: number;

  constructor(private service: BillService,
              private router: Router,
              private active: ActivatedRoute) {
  }

  date: any;

  ngOnInit() {
    this.bill = new FormGroup({
      startDay: new FormControl(),
      endDay: new FormControl(),
      userId: new FormControl(),
      apartmentId: new FormControl(),
    // this.active.paramMap.subscribe((param: ParamMap) => {
    //   // @ts-ignore
    //   this.apartmentId = +param.get('id');
    // })

    });
  }

  create() {
    this.service.createApartment(this.bill).subscribe((data) => {
    //1. check date;
      this.dateFilter;

      //2. gui mail xac nhan;
      alert("Check your email to accept");
    });
  }



  dateFilter: (date: Date | null) => boolean =
    (date: Date | null) => {
      const day = date?.getDay();
      return day !== 0 && day !== 6;
      //0 means sunday
      //6 means saturday
    }


}
