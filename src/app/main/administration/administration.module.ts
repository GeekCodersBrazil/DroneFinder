import { ValuableAttributeService } from './../../core/service/valuable-attribute.Service';
import { BrandService } from './../../core/service/brand.service';
import { ValuableAttributeAdminComponent } from './valuable-attribute-admin/valuable-attribute-admin.component';
import { BrandsAdminComponent } from './brands-admin/brands-admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule,
  MatIconModule, MatListModule, MatInputModule, MatDatepickerModule,
  MatOptionModule, MatSelectModule, MatDialogModule, MatCheckboxModule,
  MatStepperModule, MatSidenavModule, MatButtonToggleModule, MatSlideToggleModule, MatRippleModule, MatMenuModule  } from '@angular/material';

import { SharedModule } from './../../shared/shared.module';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DroneFormComponent } from './drone-form/drone-form.component';

import { CategoryDialogFormComponent } from './basic-dialog-forms/category-dialog-form/category-dialog-form.component';
import { BrandDialogFormComponent } from './basic-dialog-forms/brand-dialog-form/brand-dialog-form.component';
import { ValuableAttributeDialogFormComponent } from './basic-dialog-forms/valuable-attribute-dialog-form/valuable-attribute-dialog-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CoreModule } from '../../core/core.module';

import { MatIconRegistry } from "@angular/material";
import { DomSanitizer, BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { DroneAdminComponent } from './drone-admin/drone-admin.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,

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
    MatRippleModule,
    MatMenuModule,
    MatSlideToggleModule,

    SharedModule
  ],
  declarations: [
    AdminHomeComponent,
    DroneFormComponent,
    DroneAdminComponent,
    CategoryDialogFormComponent,
    ValuableAttributeDialogFormComponent,
    BrandDialogFormComponent,
    UserFormComponent,
    BrandsAdminComponent,
    ValuableAttributeAdminComponent
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
export class AdministrationModule {
  constructor (private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private brandService: BrandService, private valuableAttributeService: ValuableAttributeService) {
    this.iconRegistry.addSvgIcon('drone', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/drone.svg'))
    this.iconRegistry.addSvgIcon('brand', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/brand.svg'))
    this.iconRegistry.addSvgIcon('rcType', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/rc.svg'))
    this.iconRegistry.addSvgIcon('cameraPhoto', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/photo.svg'))
    this.iconRegistry.addSvgIcon('cameraVideo', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/video.svg'))
    this.iconRegistry.addSvgIcon('gimbal', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/gimbal.svg'))
    this.iconRegistry.addSvgIcon('battery', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/battery.svg'))
    this.iconRegistry.addSvgIcon('users', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/users.svg'))
    this.iconRegistry.addSvgIcon('quit', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/signout.svg'))
    this.iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/search.svg'))
  }
}
