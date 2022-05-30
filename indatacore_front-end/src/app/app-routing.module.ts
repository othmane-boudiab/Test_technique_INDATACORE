import { RouteActiveServiceService } from './service/filter/route-active-service.service';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { UploadComponent } from './pages/upload/upload.component';
import { AddOrdersComponent } from './pages/add-orders/add-orders.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginActiveService } from './service/filter/login-active.service';

const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [RouteActiveServiceService]},
  {path: 'orders', children: [
    {path: '', component: OrdersComponent},
    {path: 'add', component: AddOrdersComponent},
  ], canActivate: [RouteActiveServiceService]},
  {path: 'upload', component: UploadComponent, canActivate: [RouteActiveServiceService]},
  {path: 'signin', component: SigninComponent, canActivate: [LoginActiveService]},
  {path: 'signup', component: SignupComponent, canActivate: [LoginActiveService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
