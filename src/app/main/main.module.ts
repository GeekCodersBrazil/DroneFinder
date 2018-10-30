import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatDividerModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    CoreModule,

    SharedModule
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ]
})
export class MainModule { }
