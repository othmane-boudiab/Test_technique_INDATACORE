import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl:string = "http://localhost:8080/";

  constructor(private http: HttpClient, private cook: CookieService) { }

  Authentication(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}signin`, {email, password}).pipe(
      map(response => {
        sessionStorage.setItem('email', response.email);
        sessionStorage.setItem('token', `Bearer ${response.token}`);
        this.cook.set('email', response.email);
        this.cook.set('token', `Bearer ${response.token}`);
        return response
      })
    );
  }

  addUser(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}signup`, {name, email, password}).pipe(
      map(response => response)
    );
  }

  getAuthentication() {
    return sessionStorage.getItem('email');
  }

  getToken() {
    if(this.getAuthentication()) {
      return sessionStorage.getItem('token');
    }
  }

  isLogged(){
    return this.getToken() != null;
  }

  logout() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    // this.cart.products = [];
    // this.cart.totalProduct.next(0);
    // this.cart.totalPrice.next(0);
  }
}
