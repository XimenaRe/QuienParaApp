import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  darkMode: boolean = true;

  constructor(
    private alertMessage: AlertsService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.userService.checkToken().subscribe((response: any) => {

        if (localStorage.getItem('terms') == 'true') {
          if (localStorage.getItem('TP') === '2') {
            this.router.navigate(['/contracting/tabs/tab1']);
          } else {
            this.router.navigate(['/contractor/tabs/tab1']);
          }
        } else {
          this.router.navigate(['/auth/terms']);
        }
      }), (error: any) => {
        // console.log(error);
      };
    } else {
      if (localStorage.getItem('TP') !== null) {
        this.router.navigate(['/auth/signIn']);
      }
    }
  }

  no_disponible(message: any) {
    message = message;
    this.alertMessage.no_disponible(message);
  }

  userType(type: boolean) {
    if (type) {
      localStorage.setItem('TP', '2');
    } else {
      localStorage.setItem('TP', '3');
    }
    this.router.navigate(['/auth/network']);
  }
}
