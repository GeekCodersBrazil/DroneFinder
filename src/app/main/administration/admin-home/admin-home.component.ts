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

  selectedTool: string = 'none'

  constructor(public authService: AuthService, private router: Router) { }

  selectTool(tool: string) {
    this.router.navigate(['/admin/' + tool])
    this.selectedTool = tool
  }

  drones() {
    this.router.navigate(['/admin/drones'])
    this.selectedTool = 'drones'
  }

  formTEMP() {
    this.router.navigate(['/admin/formTEMP'])
    this.selectedTool = 'formTEMP'
  }

  users() {
    this.router.navigate(['/admin/users'])
    this.selectedTool = 'users'
  }

  ngOnInit() {
    setTimeout(()=>{ this.sidenav.open() }, 200)
  }

  quit() {
    this.sidenav.close()
    setTimeout(()=>{ this.router.navigate(['/home']) }, 300)
  }
}
