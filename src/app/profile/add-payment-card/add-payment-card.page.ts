import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-payment-card',
  templateUrl: './add-payment-card.page.html',
  styleUrls: ['./add-payment-card.page.scss'],
})
export class AddPaymentCardPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }


}
