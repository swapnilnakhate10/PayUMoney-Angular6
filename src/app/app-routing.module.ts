import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentFormComponent} from './payumoney-payment/payment-form/payment-form.component';
import {PayumoneyPaymentComponent} from './payumoney-payment/payumoney-payment.component';
import {PaymentSuccessComponent} from './payumoney-payment/payment-success/payment-success.component';
import {PaymentFailureComponent} from './payumoney-payment/payment-failure/payment-failure.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/payment',
    pathMatch : 'full'
  },
  {
    path : 'payment',
    component : PayumoneyPaymentComponent,
    children : [
      {
        path: '',
        component: PaymentFormComponent,
      },
      {
        path: 'success',
        component: PaymentSuccessComponent,
      },
      {
        path: 'failure',
        component: PaymentFailureComponent,
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
