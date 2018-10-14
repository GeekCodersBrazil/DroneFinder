import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatListModule, MatInputModule, MatDatepickerModule, MatOptionModule, MatSelectModule, MatDialogModule, MatCheckboxModule } from '@angular/material';

import { SharedModule } from './../../shared/shared.module';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DroneFormComponent } from './drone-form/drone-form.component';
import { DroneListComponent } from './drone-list/drone-list.component';

import { CategoryDialogFormComponent } from './basic-dialog-forms/category-dialog-form/category-dialog-form.component';
import { BrandDialogFormComponent } from './basic-dialog-forms/brand-dialog-form/brand-dialog-form.component';
import { ValuableAttributeDialogFormComponent } from './basic-dialog-forms/valuable-attribute-dialog-form/valuable-attribute-dialog-form.component';

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
    MatCheckboxModule,

    SharedModule
  ],
  declarations: [
    AdminHomeComponent,
    DroneFormComponent,
    DroneListComponent,
    CategoryDialogFormComponent,
    ValuableAttributeDialogFormComponent,
    BrandDialogFormComponent
  ],
  entryComponents: [
    DroneFormComponent,
    BrandDialogFormComponent,
    CategoryDialogFormComponent,
    ValuableAttributeDialogFormComponent],
  exports: [
    AdminHomeComponent
  ]
})
export class AdministrationModule { }
