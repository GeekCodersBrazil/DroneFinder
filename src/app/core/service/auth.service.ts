import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>

  constructor( 
    private router: Router, 
    private fbAuth: AngularFireAuth, 
    private userService: UserService ) {
    this.user$ = this.fbAuth.authState;
  }

  login() {

    this.fbAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(result => {
      this.userService.addUser(result.user.displayName, result.user.email, result.user.photoURL);

     
    })
    .then(r=>{
      this.router.navigate(['/home']);
    })
    .catch (error => console.log('auth error: ' , error))
  }

  logout() {
    //this.userService.unsubscribe();
    this.fbAuth.auth.signOut();
    localStorage.setItem("userCredentials","");
    this.router.navigate(['/home']);
  }
}
