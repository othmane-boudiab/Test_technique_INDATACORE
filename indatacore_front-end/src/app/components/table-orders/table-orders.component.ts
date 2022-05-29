import { Router } from '@angular/router';
import { Order } from './../../model/order';
import { OrdersService } from './../../service/orders.service';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.css']
})
export class TableOrdersComponent implements OnInit {

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
