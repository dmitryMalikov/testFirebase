import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// TODO: spread material modules
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule
    ],
    declarations: [

    ],
    exports: [
        FormsModule,
        MatButtonModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class SharedModule { }