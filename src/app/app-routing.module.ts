import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router'

import { HomeComponent } from './main/home/home.component';
import { AdminHomeComponent } from './main/administration/admin-home/admin-home.component';

import { AdminGuard } from './core/guard/admin.guard';
import { DroneAdminComponent } from './main/administration/drone-admin/drone-admin.component';
import { UserFormComponent } from './main/administration/user-form/user-form.component';
import { BrandsAdminComponent } from './main/administration/brands-admin/brands-admin.component';
import { DroneFormComponent } from './main/administration/drone-form/drone-form.component';
import { ValuableAttributeAdminComponent } from './main/administration/valuable-attribute-admin/valuable-attribute-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminHomeComponent, canActivate: [ AdminGuard ],
    children: [
      { path: 'drones', component: DroneAdminComponent },
      { path: 'brands', component: BrandsAdminComponent },
      { path: 'rcType', component: ValuableAttributeAdminComponent},
      { path: 'cameraPhoto', component: ValuableAttributeAdminComponent},
      { path: 'cameraVideo', component: ValuableAttributeAdminComponent},
      { path: 'gimbal', component: ValuableAttributeAdminComponent},
      { path: 'battery', component: ValuableAttributeAdminComponent},
      { path: 'users', component: UserFormComponent },
      { path: 'formTEMP', component: DroneFormComponent }
    ] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
