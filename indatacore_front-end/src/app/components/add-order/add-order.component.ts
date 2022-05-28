import { Order } from './../../model/order';
import { OrdersService } from './../../service/orders.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  formOrder: FormGroup;

  constructor(private order: OrdersService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form();
  }

  form(){
    this.formOrder = this.fb.group({
      name: [''],
      description: [''],
      quantity: ['']
    });
  }

  addOrder() {
    this.order.addOrder(this.formOrder.value).subscribe(
      () => this.router.navigate(['/orders'])
    );
  }

}
