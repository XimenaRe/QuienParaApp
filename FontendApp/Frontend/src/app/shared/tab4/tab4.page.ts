import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  darkMode: boolean = true;
  data: any;

  constructor(
    private router: Router,
    private AlertController: AlertController
  ) { }

  ngOnInit() {
    let getData: any = localStorage.getItem('data');
    this.data = JSON.parse(getData);

  }

  toggleTheme(event: any) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'ligth');
      this.darkMode = false;
    } else {
      document.body.setAttribute('color-theme', 'dark');
      this.darkMode = true;
    }
  }

  async salir() {
    const alert = await this.AlertController.create({
      header: 'Cerrar sesión',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'custom-alert-button button-cancel',
          handler: () => {
          },
        },
        {
          text: 'Salir',
          role: 'confirm',
          cssClass: 'custom-alert-button button-accept',
          handler: () => {
            localStorage.clear();
            this.router.navigate(['/']);
          }
        },
      ],
      mode: 'ios'
    });

    alert.present();
  }
}
