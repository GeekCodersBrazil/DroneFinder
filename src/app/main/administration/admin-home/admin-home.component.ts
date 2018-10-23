import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { AuthService } from '../../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  animations: [
    trigger('homeTrigger', [
      state('active', style({transform: 'translateX(0)'})),
      state('leaving', style({transform: 'translateX(-200px)'})),
      transition('void => active', [style({transform: 'translateX(-200px)'}), animate('500ms')]),
      transition('active => leaving', [animate('500ms')])
    ]),
    trigger('toolTrigger', [
      state('active', style({transform: 'translateX(0)'})),
      state('leaving', style({transform: 'translateX(-1500px)'})),
      state('inactive', style({transform: 'translateX(-1500px)'})),
      transition('void => inactive', [style({transform: 'translateX(-1500px)'}), animate('500ms')]),
      transition('inactive => active', [animate('500ms')]),
      transition('active => leaving', [animate('500ms')])
    ])
  ]
})
export class AdminHomeComponent implements OnInit {

  homeState: string = 'active'
  droneFormState: string = 'inactive'
  droneListState: string = 'inactive'
  usersState: string = 'inactive'
  activeToolState: string = 'empty'

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  changeForm(nextToolState: string) {
    this.deactivateState('droneFormState')
    this.deactivateState('droneListState')
    this.deactivateState('usersState')
    if (this.activeToolState == 'empty')
      this[nextToolState] = 'active'
    this.activeToolState = nextToolState
  }

  deactivateState(state: string) {
    if (this[state] == 'active')
      this[state] = 'leaving'
  }

  quit() {
    this[this.activeToolState] = 'leaving'
    this.activeToolState = 'quit'
  }

  onHomeDone() {
    if ('leaving' == this.homeState)
      this.router.navigate(['/home'])
  }

  onToolDone(state: string) {
    if ('leaving' == this[state])
      this[state] = 'inactive'
    if (this.activeToolState == 'quit')
      this.homeState = 'leaving'
    else
      this[this.activeToolState] = 'active'
  }

}
