import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // Comando para dejar el thema dark por defecto
    document.body.setAttribute('color-theme', 'dark');
  }
}

