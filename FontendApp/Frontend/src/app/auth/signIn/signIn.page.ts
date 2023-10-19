import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { jwtSecurityService } from 'src/app/services/jwt-security/jwt-security.service';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.page.html',
  styleUrls: [
    './signIn.page.scss',
    '../../app.component.scss'
  ],
})
export class signInPage implements OnInit {

  loginForm: any = FormGroup;
  responseMessage: any;
  data: any;
  terms!: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertsService,
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, Validators.required]
    });
  }

  handleSubmit() {
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password,
      user_rol: localStorage.getItem('TP')
    }

    this.userService.login(data).subscribe((response: any) => {
      if (response) {
        localStorage.setItem('token', response.token);
        this.responseMessage = response?.message;

        if (localStorage.getItem('terms') == 'true') {
          if (localStorage.getItem('TP') === '2') {
            this.router.navigate(['/contracting/tabs/tab1']);
          } else {
            this.router.navigate(['/contractor/tabs/tab1']);
          }
        } else {
          this.router.navigate(['/auth/terms']);
        }
      } else {
        this.alertService.global_alert(response.message);
      }
    }, (error: any) => {
      if (error.status === 401 || error.status === 400 || error.status === 500) {
        this.alertService.global_alert(error.error.message);
      } else {
        this.alertService.error_Red();
      }
    });
  }
}


