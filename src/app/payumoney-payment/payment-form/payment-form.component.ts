import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {PaymentModel} from '../../shared/models/payment.model';
import {PayumoneyPaymentService} from '../payumoney-payment.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: 'payemnt-form.component.html',
  styleUrls: ['payment-form.component.scss']
})

export class PaymentFormComponent {

  paymentModel: PaymentModel = new PaymentModel();
  paymentForm = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    amount : new FormControl(''),
    productinfo : new FormControl('')
  });

  constructor(private paymentService: PayumoneyPaymentService) {}

  onSubmit() {

    this.paymentModel.firstname = this.paymentForm.value.firstname;
    this.paymentModel.lastname = this.paymentForm.value.lastname;
    this.paymentModel.email = this.paymentForm.value.email;
    this.paymentModel.phone = this.paymentForm.value.phone;
    this.paymentModel.amount = this.paymentForm.value.amount;
    this.paymentModel.productinfo = this.paymentForm.value.productinfo;

    console.log('Payment Model : ' + JSON.stringify(this.paymentModel));
    this.paymentService.createPayment(this.paymentModel).subscribe(
      res => {
        this.onSuccessPayment(res);
      },
      err => {
        this.onFailurePayment(err);
      }
    );
  }

  onSuccessPayment(response) {
    console.log('Success Payment : ' + response);
    if (response.url) {
      // Render PayUmoney payment gateway page
      window.location.href = response.url;
    }
  }

  onFailurePayment(error) {
    console.log('Failure Payment : ' + error);
  }
}
