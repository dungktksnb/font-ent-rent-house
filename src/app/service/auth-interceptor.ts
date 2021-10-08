import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    const token = this.tokenService.getToken();
    if (token != null) {
      // console.log('Vao ham nay khong');
      authReq = request.clone({headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token)})
    }
    // console.log('Khong vao ham');
    return next.handle(authReq);
  }

}

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
]
