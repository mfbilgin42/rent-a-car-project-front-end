import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './component/brand/brand.component';
import { NaviComponent } from './component/navi/navi.component';
import { ColorComponent } from './component/color/color.component';
import { CustomerComponent } from './component/customer/customer.component';
import { CarComponent } from './component/car/car.component';
import { RentalComponent } from './component/rental/rental.component';
import { HttpClientModule } from '@angular/common/http';
import { CardetailComponent } from './component/cardetail/cardetail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/car/filter-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandFilterPipePipe } from './pipes/brand/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color/color-filter-pipe.pipe';
import { PaymentComponent } from './component/payment/payment.component';
import { RentCarComponent } from './component/rent-car/rent-car.component';
import { CarAddComponent } from './component/car-add/car-add.component';
import { BrandAddComponent } from './component/brand-add/brand-add.component';
import { ColorAddComponent } from './component/color-add/color-add.component';
import { CustomerAddComponent } from './component/customer-add/customer-add.component';
import { CarImageAddComponent } from './component/car-image-add/car-image-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    CardetailComponent,
    VatAddedPipe,
    FilterPipePipe,
    BrandFilterPipePipe,
    ColorFilterPipePipe,
    PaymentComponent,
    RentCarComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    CustomerAddComponent,
    CarImageAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
