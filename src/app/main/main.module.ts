import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatDividerModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { DroneFormComponent } from './administration/drone-form/drone-form.component';
import { DroneListComponent } from './administration/drone-list/drone-list.component';

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
