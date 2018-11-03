import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule, 
  MatIconModule, MatListModule, MatInputModule, MatDatepickerModule, 
  MatOptionModule, MatSelectModule, MatDialogModule, MatCheckboxModule, 
  MatStepperModule, MatSidenavModule, MatButtonToggleModule, MatSlideToggleModule  } from '@angular/material';

import { SharedModule } from './../../shared/shared.module';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DroneFormComponent } from './drone-form/drone-form.component';
import { DroneListComponent } from './drone-list/drone-list.component';

import { CategoryDialogFormComponent } from './basic-dialog-forms/category-dialog-form/category-dialog-form.component';
import { BrandDialogFormComponent } from './basic-dialog-forms/brand-dialog-form/brand-dialog-form.component';
import { ValuableAttributeDialogFormComponent } from './basic-dialog-forms/valuable-attribute-dialog-form/valuable-attribute-dialog-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { CoreModule } from '../../core/core.module';

import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

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
    MatStepperModule,
    MatSidenavModule,
    MatButtonToggleModule,
    CoreModule,

    SharedModule,

    MatSlideToggleModule
  ],
  declarations: [
    AdminHomeComponent,
    DroneFormComponent,
    DroneListComponent,
    CategoryDialogFormComponent,
    ValuableAttributeDialogFormComponent,
    BrandDialogFormComponent,
    BrandListComponent,
    UserFormComponent
  ],
  entryComponents: [
    DroneFormComponent,
    BrandDialogFormComponent,
    CategoryDialogFormComponent,
    ValuableAttributeDialogFormComponent],
  exports: [
    AdminHomeComponent, BrandListComponent, DroneListComponent
  ]
})
export class AdministrationModule {
  constructor (private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('drone', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/drone.svg'))
    this.iconRegistry.addSvgIcon('users', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/users.svg'))
    this.iconRegistry.addSvgIcon('quit', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/signout.svg'))
  }
}
