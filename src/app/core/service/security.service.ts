import { Injectable } from '@angular/core';
import { User } from '../model/user.model';



@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  saveUserProfile(user: User) : void
  {
      localStorage.setItem('userCredentials', JSON.stringify(user));
  }

  getUserProfile(): User{

    var userLocalStorage: User = new User;
    userLocalStorage.email = localStorage.getItem('userCredentials')["email"];
    userLocalStorage.name = localStorage.getItem('userCredentials')["name"];
    userLocalStorage.isAdmin = localStorage.getItem('userCredentials')["isAdmin"];
    return userLocalStorage;
  }
}
