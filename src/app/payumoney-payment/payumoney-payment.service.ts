import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../shared/sharedService/httpService';
import {PaymentModel} from '../shared/models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PayumoneyPaymentService {

  constructor(private httpService: HttpService) {
  }

  createPayment(paymentRequest: PaymentModel) {
    const PAYMENT_URL = '/payment/pay';
    return this.httpService.post(PAYMENT_URL, paymentRequest);
  }

}
