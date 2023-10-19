import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { ContractorPageRoutingModule } from './contractor-routing.module';
import { ContadorPage } from './contador/contador.page';
import { CotizacionPage } from './cotizacion/cotizacion.page';
import { Pagina1Page } from './pagina1/pagina1.page';
import { ElectronicaPage } from './electronica/electronica.page';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    ContractorPageRoutingModule,
    SharedModule,
    LayoutModule
  ],
  declarations: [ContadorPage, CotizacionPage, Pagina1Page, ElectronicaPage]
})
export class ContactorPageModule { }
