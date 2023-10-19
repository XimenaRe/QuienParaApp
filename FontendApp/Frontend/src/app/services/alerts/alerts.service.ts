import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  handlerMessage!: string;
  roleMessage!: string;

  constructor(private alert: AlertController, private router: Router) { }


  async no_disponible(message: any) {
    message = message;
    const alert = await this.alert.create({
      subHeader: 'Ups, lo sentimos...',
      message: message,
      mode: 'ios',
    });

    alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 2250);
  }

  async error_Red() {
    const alert = await this.alert.create({
      subHeader: 'Ups, lo sentimos...',
      message: 'Error de conexión, intente nuevamente!',
      mode: 'ios',
    });

    alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 2250);
  }

  // Alerta para modulos de los tipos de apoyos
  async global_alert(message: any) {
    message = message;

    const alert = await this.alert.create({
      subHeader: 'Ups, lo sentimos...',
      message: message,
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            setTimeout(() => {
              alert.dismiss();
            }, 5000);
          }
        },
      ],
    });

    alert.present();
  }


  // Funcion para cerrar la salid de la app
  async exitApp() {
    const alert = await this.alert.create({
      header: 'Salir de la App',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alerta cancelada';
          },
        },
        {
          text: 'Salir',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed'
            App.exitApp();
          }
        },
      ],
      mode: 'ios',
    });

    alert.present();
  }
}
