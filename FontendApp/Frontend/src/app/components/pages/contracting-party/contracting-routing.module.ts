import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOfferPage } from './create-offer/create-offer.page';
import { ViewOfferPage } from './view-offer/view-offer.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'create-offer/:id',
    component: CreateOfferPage
  },
  {
    path: 'view-offer',
    component: ViewOfferPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractingPageRoutingModule { }
