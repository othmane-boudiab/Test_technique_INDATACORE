import { AddOrdersComponent } from './pages/add-orders/add-orders.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'orders', children: [
    {path: '', component: OrdersComponent},
    {path: 'add', component: AddOrdersComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
