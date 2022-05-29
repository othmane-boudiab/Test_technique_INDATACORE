import { Order } from './../../model/order';
import { OrdersService } from './../../service/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.css']
})
export class TableOrdersComponent implements OnInit {

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
