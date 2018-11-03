import { MatToolbarModule, MatCardModule, MatButtonModule,
   MatIconModule, MatFormFieldModule, MatDividerModule, 
   MatTooltipModule, MatSlideToggleModule } from '@angular/material';
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
    MatTooltipModule,
    SharedModule,
    MatSlideToggleModule
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ]
})
export class MainModule { }
