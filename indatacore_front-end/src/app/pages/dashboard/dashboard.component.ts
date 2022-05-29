import { Order } from './../../model/order';
import { OrdersService } from './../../service/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orders: Order[] = [];
  constructor(private order: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
    console.log(this.orders);


  }

  getOrders() {
    this.order.getOrders().subscribe(
      data => {
        this.orders = data;
      }
    )
  }

}
