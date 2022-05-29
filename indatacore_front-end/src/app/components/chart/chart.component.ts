import { OrdersService } from './../../service/orders.service';
import { Observable } from 'rxjs';
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
  // @Input('data') data: Order[] = [];

  data: Order[] = [];

  labels: string[] = [];
  values: number[] = [];


  constructor(private orders: OrdersService) { }

  ngOnInit(): void {
    // this.getOrders();

  }

  // getOrders() {
  //   this.orders.getOrders().subscribe(
  //     data => {
  //       this.labels = _.map(data, 'name');
  //       this.values = _.map(data, 'quantity');
  //       console.log(this.labels);

  //     }
  //   )
  // }



  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log(this.data);
    // let labels = _.map(this.data, 'name');
    // let values = _.map(this.data, 'quantity');

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


  //   new Chart(this.myId, {
  //     type: this.type,
  //     data: {
  //         labels: this.labels,
  //         datasets: [{
  //             label: '# of Votes',
  //             data: this.values,
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             borderColor: [
  //                 'rgba(255, 99, 132, 1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)',
  //                 'rgba(153, 102, 255, 1)',
  //                 'rgba(255, 159, 64, 1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //         scales: {
  //             y: {
  //                 beginAtZero: true
  //             }
  //         }
  //     }
  // });

  }

  randomize(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
