import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router'

import { HomeComponent } from './main/home/home.component';
import { AdminHomeComponent } from './main/administration/admin-home/admin-home.component';

import { AdminGuard } from './core/guard/admin.guard';
import { DroneListComponent } from './main/administration/drone-list/drone-list.component';
import { BrandListComponent } from './main/administration/brand-list/brand-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminHomeComponent, canActivate: [ AdminGuard ],
    children: [
      { path: 'drones', component: DroneListComponent },
      { path: 'brand', component: BrandListComponent }
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
