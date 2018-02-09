import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/main.module#MainModule',
  },
  {
    path: 'not-found',
    loadChildren: './modules/not-found/not-found.module#NotFoundModule'
  },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
