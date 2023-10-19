import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { signInPage } from './signIn/signIn.page';
import { AuthPageRoutingModule } from './auth-routing.module';
import { SignUpPage } from './signUp/signUp.page';
import { TermsPage } from './terms/terms.page';
import { RecoveryPage } from './recovery/recovery.page';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { NetworkInPage } from './network-in/network-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    signInPage,
    SignUpPage,
    TermsPage,
    RecoveryPage,
    NetworkInPage,
    Page404Component,
    Page500Component,
  ]
})
export class AuthPageModule { }
