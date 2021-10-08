import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SignUp} from "../model/sign-up";
import {JwtResponse} from "../model/jwt-response";
import {SignIn} from "../model/sign-in";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // API_LOCAL
  // private API_SIGNUP = environment.API_LOCAL+'signup';
  private API_SIGNIN = environment.API_LOCAL + 'users/signin';

  //API_SERVER
  private API_SIGNUP = environment.API_LOCAL + 'users/signup';

  constructor(private http: HttpClient) {
  }

  signUp(signUp: SignUp): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP, signUp)
  }

  signIn(signIn: SignIn): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.API_SIGNIN, signIn)
  }
}
