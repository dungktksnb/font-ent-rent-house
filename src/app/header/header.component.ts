import {Component, NgModule, OnInit} from '@angular/core';
import {TokenService} from "../service/token.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name!: string;
  isLogin = false;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogin = true;
      this.name = this.tokenService.getName();
    }
  }
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class NavBarModule {
}
