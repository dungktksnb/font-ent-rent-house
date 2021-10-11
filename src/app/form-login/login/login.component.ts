import {Component, OnInit} from '@angular/core';
import {SignIn} from "../../model/sign-in";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  hide = true;
  signInForm!: SignIn;

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.signInForm = new SignIn(this.form.username, this.form.password);
    this.authService.signIn(this.signInForm).subscribe(data => {
      if (data.token != undefined) {
        this.tokenService.setToken(data.token);
        this.tokenService.setToken(data.username);
        this.tokenService.setToken(data.password);
        this.tokenService.setRoles(data.roles);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        })
      }
    })
  }
}
