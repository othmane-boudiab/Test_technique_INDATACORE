import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterAuthService implements HttpInterceptor {

  constructor(private auth: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.getToken() && this.auth.getAuthentication()) {
      req = req.clone({
        setHeaders: {
          Authorization: this.auth.getToken() as string
        }
      });
    }
    return next.handle(req);
  }
}
