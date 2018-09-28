import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './../../core/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(map(user => {
      if (user && user.uid) {
        return true
      } else {
        this.router.navigate(['/home'])
        return false
      }
    }))
  }
}
