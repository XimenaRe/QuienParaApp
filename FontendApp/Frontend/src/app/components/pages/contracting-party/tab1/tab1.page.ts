import { Component, Optional } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  message!: string;

  constructor(
    private alertExit: AlertsService,
    private platform: Platform,
    private router: Router,
    @Optional() private routerOutlet?: IonRouterOutlet
  ) {


    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet?.canGoBack()) {
        this.alertExit.exitApp();
      }
    });
  }


  global_alert(id: string) {
    // this.alertExit.global_alert('Lo sentimos pero este módulo no está disponible...');
    this.router.navigate(['/contracting/create-offer/' + id]);
  }


  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  };
}
