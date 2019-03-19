import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PayumoneyPaymentComponent} from './payumoney-payment/payumoney-payment.component';
import {PaymentFormComponent} from './payumoney-payment/payment-form/payment-form.component';
import {PaymentFailureComponent} from './payumoney-payment/payment-failure/payment-failure.component';
import {PaymentSuccessComponent} from './payumoney-payment/payment-success/payment-success.component';

@NgModule({
  declarations: [
    AppComponent,
    PayumoneyPaymentComponent,
    PaymentFormComponent,
    PaymentFailureComponent,
    PaymentSuccessComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
