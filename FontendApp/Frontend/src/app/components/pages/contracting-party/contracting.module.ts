import { ViewOfferPage } from './view-offer/view-offer.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContractingPageRoutingModule } from './contracting-routing.module';
import { CreateOfferPage } from './create-offer/create-offer.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractingPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  declarations: [CreateOfferPage, ViewOfferPage]
})
export class ContractingPageModule { }
