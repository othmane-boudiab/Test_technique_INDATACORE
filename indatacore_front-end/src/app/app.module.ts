import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { TableOrderComponent } from './components/table-order/table-order.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ChartComponent } from './components/chart/chart.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AddOrdersComponent } from './pages/add-orders/add-orders.component';
import { UploadComponent } from './pages/upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploaderModule } from 'angular-uploader';

@NgModule({
  declarations: [
    AppComponent,
    AddOrderComponent,
    TableOrderComponent,
    NavBarComponent,
    SideBarComponent,
    ChartComponent,
    UploadFileComponent,
    DashboardComponent,
    OrdersComponent,
    AddOrdersComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
