import { OrdersService } from './../../service/orders.service';
import { Order } from './../../model/order';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-order',
  templateUrl: './table-order.component.html',
  styleUrls: ['./table-order.component.css']
})
export class TableOrderComponent implements OnInit {

  orders: Order[] = [];
  constructor(private order: OrdersService, private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.order.getOrders().subscribe(
      data => {
        this.orders = data;
      }
    )
  }

  randomOrder() {
    this.order.randomOrder().subscribe(
      () => this.getOrders()
    );
  }

}
