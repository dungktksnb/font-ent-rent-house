import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {SignUp} from "../../model/sign-up";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  hide = true;
  status = 'Please fill in the form to register';
  signUpForm!: SignUp;
  error1: any = {
    message: "no_user"
  }
  error2: any = {
    message: "no_email"
  }
  success: any = {
    message: "yes"
  }

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  ngSubmit() {
    // @ts-ignore
    this.signUpForm = new SignUp(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
    )
    this.authService.signUp(this.signUpForm).subscribe(data => {
      this.router.navigate(['/login']);
      this.form.reset();
    })

  }
}
