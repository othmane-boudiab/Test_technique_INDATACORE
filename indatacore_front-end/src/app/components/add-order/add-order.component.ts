import { Router } from '@angular/router';
import { OrdersService } from './../../service/orders.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  formOrder: FormGroup;

  constructor(private order: OrdersService, private fb: FormBuilder, private router: Router) {
    this.formOrder = this.fb.group({
        name: [''],
        description: [''],
        quantity: ['']
    });
  }

  ngOnInit(): void {
    // this.form();
  }

  // form(){
  //   this.formOrder = this.fb.group({
  //     name: [''],
  //     description: [''],
  //     quantity: ['']
  //   });
  // }

  addOrder() {
    this.order.addOrder(this.formOrder.value).subscribe(
      () => this.router.navigate(['/orders'])
    );
  }

}
