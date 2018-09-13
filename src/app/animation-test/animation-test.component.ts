import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animation-test',
  templateUrl: './animation-test.component.html',
  styles: [ ],
  animations: [
    trigger('myTrigger', [
      state('small', style({transform: 'scale(1)'})),
      state('large', style({transform: 'scale(1.2)'})),
      state('fadein', style({opacity: '1'})),
      transition('small <=> large', animate('250ms')),
      transition('void => fadein', [style({opacity: '0'}), animate('1000ms')])
    ]),
    trigger('myMovement', [
      state('moving', style({transform: 'translateX({{valueX}}px)'}), {'params': {valueX: 10}}),
      state('stopped', style({})),
      transition('* => moving', animate('50ms'))
    ])
  ]
})
export class AnimationTestComponent implements OnInit {

  movement: string = 'idle'
  state: string = 'fadein'
  valueX: number = 10

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onClick() {
    this.movement = 'moving'
  }

  onDone($event) {
    if (this.movement == 'moving') {
      this.movement = 'stopped'
      this.valueX += 10
    } else if (this.movement == 'stopped') {
      this.movement='moving'
    }
  }

  mouseEnter() {
    this.state = 'large'
  }

  mouseLeave() {
    this.state = 'small'
  }

}
