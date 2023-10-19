import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  messages = [
    {
      user: 'simon',
      createAt: 1554090856000,
      msg: 'Hola como estas?'
    },
    {
      user: 'Harol',
      createAt: 1554090856000,
      msg: 'Hey?'
    },
    {
      user: 'simon',
      createAt: 1554090856000,
      msg: 'Hola?'
    },
  ];
  currentUser = 'simon';
  newMsg = '';
  constructor(
    private router: Router,
    private alerts: AlertsService
  ) { }

  sendMessage() { }

  navegacion() {
    this.alerts.global_alert('El perfil no se encuentra está disponible...');
    // this.router.navigate(['/home']);
  }
}

