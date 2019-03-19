export class PaymentModel {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  amount: number;
  productinfo: string;
  txnid: number;
  surl: string;
  furl: string;

  constructor() {
    this.furl = 'http://localhost:8080/api/payment/failure';
    this.surl = 'http://localhost:8080/api/payment/success';
    this.txnid = this.getRandomInt();
  }

  getRandomInt() {
    return Math.floor(100000 + Math.random() * 900000);
  }
}
