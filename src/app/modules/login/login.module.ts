import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        LoginRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [ LoginComponent ]
})
export class LoginModule {}
