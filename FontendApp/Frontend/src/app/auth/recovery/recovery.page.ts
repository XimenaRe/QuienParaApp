import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {

  forgotPasswordForm: any = FormGroup;
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alert: AlertController
  ) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]]
    });
  }


  handleSubmit() {
    var formData = this.forgotPasswordForm.value;
    var data = {
      email: formData.email
    }

    this.userService.forgotPassword(data).subscribe((response: any) => {
      if (response) {
        this.alert_email(response.message, 'Contraseña enviada');
      } else {
        this.alert_email(response.message, 'Algo salio mal');
        console.log('error');
      }
    })

  }

  async alert_email(message: any, title: any) {
    const alert = await this.alert.create({
      subHeader: title,
      message: message,
      mode: 'ios',
    });

    alert.present();
    setTimeout(() => {
      alert.dismiss();
      this.router.navigate(['/login'])
    }, 2250);
  }

}
