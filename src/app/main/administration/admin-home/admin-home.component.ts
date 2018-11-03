import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../core/service/auth.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav

  constructor(public authService: AuthService, private router: Router) { }

  drones() {
    this.router.navigate(['/admin/drones'])
  }

  formTEMP() {
    this.router.navigate(['/admin/formTEMP'])
  }

  users() {
    this.router.navigate(['/admin/users'])
  }

  ngOnInit() {
    setTimeout(()=>{ this.sidenav.open() }, 200)
  }

  quit() {
    this.sidenav.close()
    setTimeout(()=>{ this.router.navigate(['/home']) }, 300)
  }
}
