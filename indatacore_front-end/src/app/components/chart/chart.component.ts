import { OrdersService } from './../../service/orders.service';
import { Order } from './../../model/order';
import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import * as _ from 'lodash';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input('my-id') myId = '';
  @Input('type') type: any = 'bar';

  data: Order[] = [];

  labels: string[] = [];
  values: number[] = [];


  constructor(private orders: OrdersService) { }

  ngOnInit(): void {

  }



  ngAfterViewInit() {

    this.orders.getOrders().subscribe(
      data => {
        this.labels = _.map(data, 'name');
        this.values = _.map(data, 'quantity');

    new Chart(this.myId, {
      type: this.type,
      data: {
          labels: this.labels,
          datasets: [{
              label: '# of Votes',
              data: this.values,
              backgroundColor: this.labels.map(() => `rgba(${this.randomize(0, 255)}, ${this.randomize(0, 255)}, ${this.randomize(0, 255)}, .5)`),
              // borderColor: this.labels.map(() => `rgba(${this.randomize(0, 255)}, ${this.randomize(0, 255)}, ${this.randomize(0, 255)}, 1)`),
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
      }
    )

  }

  randomize(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
