import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'contracting',
    loadChildren: () => import('./components/pages/contracting-party/contracting.module').then(m => m.ContractingPageModule)
  },
  {
    path: 'contractor',
    loadChildren: () => import('./components/pages/contractor/contractor.module').then(m => m.ContactorPageModule)
  },
  {
    // Pagina donde se redirige si ingresa una url que no existe
    path: '**',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
