import { Page500Component } from './page500/page500.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsPage } from './terms/terms.page';
import { RecoveryPage } from './recovery/recovery.page';
import { Page404Component } from './page404/page404.component';
import { signInPage } from './signIn/signIn.page';
import { SignUpPage } from './signUp/signUp.page';
import { NetworkInPage } from './network-in/network-in.page';


const routes: Routes = [
  {
    path: '',
    component: signInPage
  },
  {
    path: 'signIn',
    component: signInPage
  },
  {
    path: 'signUp',
    component: SignUpPage
  },
  {
    path: 'recovery',
    component: RecoveryPage
  },
  {
    path: 'terms',
    component: TermsPage
  },
  {
    path: 'network',
    component: NetworkInPage
  },
  {
    path: 'page400',
    component: Page404Component
  },
  {
    path: 'page500',
    component: Page500Component
  },
  {
    path: '**',
    component: Page500Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule { }
