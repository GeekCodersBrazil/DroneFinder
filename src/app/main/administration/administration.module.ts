import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatListModule, MatInputModule, MatDatepickerModule, MatOptionModule, MatSelectModule, MatDialogModule } from '@angular/material';

import { SharedModule } from './../../shared/shared.module';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DroneFormComponent } from './drone-form/drone-form.component';
import { DroneListComponent } from './drone-list/drone-list.component';
import { BrandDialogFormComponent } from './brand-dialog-form/brand-dialog-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,

    SharedModule
  ],
  declarations: [
    AdminHomeComponent,
    DroneFormComponent,
    DroneListComponent,
    BrandDialogFormComponent
  ],
  entryComponents: [ DroneFormComponent, BrandDialogFormComponent ],
  exports: [
    AdminHomeComponent
  ]
})
export class AdministrationModule { }
