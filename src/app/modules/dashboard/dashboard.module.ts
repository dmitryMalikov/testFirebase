import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

//COMPONENTS
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        RouterModule
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [

    ]
})
export class DashboardModule {}
