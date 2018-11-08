import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './../../core/service/auth.service';
import { isNullOrUndefined } from 'util';

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

      var userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
      if (!isNullOrUndefined(userCredentials))
      {
        return userCredentials.isAdmin;
      }
      this.router.navigate(['/home']);
      
    }))
  }

}
