import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Page } from './pagina1/pagina1.page';
import { ElectronicaPage } from './electronica/electronica.page';
import { CotizacionPage } from './cotizacion/cotizacion.page';
import { ContadorPage } from './contador/contador.page';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'page1',
    component: Pagina1Page
  },
  {
    path: 'eletronica',
    component: ElectronicaPage
  },
  {
    path: 'cotizacion',
    component: CotizacionPage
  },
  {
    path: 'contador',
    component: ContadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractorPageRoutingModule { }
