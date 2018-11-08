
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router'

import { HomeComponent } from './main/home/home.component';
import { AdminHomeComponent } from './main/administration/admin-home/admin-home.component';

import { AdminGuard } from './core/guard/admin.guard';
import { DroneListComponent } from './main/administration/drone-list/drone-list.component';
import { UserFormComponent } from './main/administration/user-form/user-form.component';
import { BrandsAdminComponent } from './main/administration/brands-admin/brands-admin.component';
import { DroneFormComponent } from './main/administration/drone-form/drone-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminHomeComponent, canActivate: [ AdminGuard ],
    children: [
      { path: 'drones', component: DroneListComponent, canActivate: [ AdminGuard ] },
      { path: 'brands', component: BrandsAdminComponent, canActivate: [ AdminGuard ] },
      { path: 'users', component: UserFormComponent, canActivate: [ AdminGuard ] },
      { path: 'formTEMP', component: DroneFormComponent, canActivate: [ AdminGuard ] }
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
