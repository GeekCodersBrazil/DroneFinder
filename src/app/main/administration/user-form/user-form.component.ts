import { UserService } from './../../../core/service/user.service';
import { User } from './../../../core/model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User = new User();
  formUser: FormGroup;

  constructor( private FormBuilder: FormBuilder,
               private userService: UserService) { }

  ngOnInit() {
    this.userService.fetchData();
  }

  GetUsers(){

    return this.userService.observableUser;
  }

  public toggle(event: MatSlideToggleChange, userId: string) {
    
    this.userService.updateUser(event.checked, userId);
    
}
 
}
