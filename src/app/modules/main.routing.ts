import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: MainComponent, children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        ]
      },
    ]),
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
