import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Component({
  selector: 'app-network-in',
  templateUrl: './network-in.page.html',
  styleUrls: [
    './network-in.page.scss',
    '../../app.component.scss'],
})
export class NetworkInPage implements OnInit {

  constructor(private alertMessage: AlertsService) { }

  ngOnInit() {
  }

  no_disponible(message: any) {
    message = message;
    this.alertMessage.no_disponible(message);
  }
}
