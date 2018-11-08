import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../core/service/auth.service';
import { AdminGuard } from '../../core/guard/admin.guard';
import {  SecurityService } from 'src/app/core/service/security.service';

@Component({
  selector: 'shd-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  @Input() name: String

  constructor(private router: Router,
              public authService: AuthService,
              public security: SecurityService) { }

  ngOnInit() {
  }

  openAdmin() {
    this.router.navigate(['/admin'])
  }

}
