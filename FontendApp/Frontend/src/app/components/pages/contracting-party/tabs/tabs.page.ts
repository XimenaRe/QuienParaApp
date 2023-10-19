import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(private userService: UserService) { }

  data = localStorage.getItem('data');

  ngOnInit() {

    if (this.data == '' || this.data == null) {
      this.userService.getData().subscribe((response: any) => {
        localStorage.setItem('data', JSON.stringify(response));
      }, (error: any) => {
        console.log(error.error?.message);
      });
    }
  }
}
