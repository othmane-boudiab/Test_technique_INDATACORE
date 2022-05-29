import { Order } from './../model/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUrl = 'http://localhost:8080/api/';;

  constructor(private http: HttpClient) {
    // this.apiUrl = 'http://localhost:8080/api/';
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl + 'orders');
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl + 'order', order);
  }

  randomOrder(): Observable<Order> {
    return this.http.post<Order>(this.apiUrl + 'random', {});
  }
}
