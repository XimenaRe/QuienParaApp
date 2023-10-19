import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(
    private alert: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async acuerdo() {
    const alert = await this.alert.create({
      subHeader: 'Notificación de Terminos y condiciones',
      message: 'Desea continuar, al aceptar, aceptará nuestros terminos y condiciones!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('data');
            this.router.navigate(['/auth/signIn']);
          },
        },
        {
          text: 'Continuar',
          role: 'confirm',
          handler: () => {
            setTimeout(() => {
              alert.dismiss();
            }, 2000);

            localStorage.setItem('terms', 'true');

            if (localStorage.getItem('TP') === '2') {
              this.router.navigate(['/contracting/tabs/tab1']);
            } else {
              this.router.navigate(['/contractor/tabs/tab1']);
            }
          },
        },
      ],
      mode: 'ios',
    });

    await alert.present();
  }
}

