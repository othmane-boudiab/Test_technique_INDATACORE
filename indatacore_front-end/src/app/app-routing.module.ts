import { UploadComponent } from './pages/upload/upload.component';
import { AddOrdersComponent } from './pages/add-orders/add-orders.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'orders', children: [
    {path: '', component: OrdersComponent},
    {path: 'add', component: AddOrdersComponent},
  ]},
  {path: 'upload', component: UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
