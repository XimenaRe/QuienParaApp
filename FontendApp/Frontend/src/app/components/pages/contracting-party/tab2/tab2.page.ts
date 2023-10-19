import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data: any;
  constructor() { }

  ngOnInit() {
    let getData: any = localStorage.getItem('data');
    this.data = JSON.parse(getData);
  }
}
