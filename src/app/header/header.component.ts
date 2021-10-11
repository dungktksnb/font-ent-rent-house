import {Component, NgModule, OnInit} from '@angular/core';
import {TokenService} from "../service/token.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name!: string;
  isLogin = false;

  constructor(private tokenService: TokenService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogin = true;
      this.name = this.tokenService.getName();
    }
  }

  logout(): void {
    sessionStorage.removeItem('Token_Key');
    sessionStorage.removeItem('Name_Key');
    sessionStorage.removeItem('Role_Key');
    this.isLogin = false;
    alert('Logout Successfully!');
    this.router.navigate(['/']);
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
