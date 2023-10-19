import { Tab1PageRoutingModule } from './tab1-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    LayoutModule,
  ],
  declarations: [Tab1Page],
  exports: [Tab1Page]
})
export class Tab1PageModule { }
