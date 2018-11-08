import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

export const screenAnimation = trigger('formScreen', [
  state('opened', style({ transform: 'translateX(0px)' })),
  transition('void=>opened', [style({ transform: 'translateX(-2000px)' }), animate('500ms ease-out')])
])

export const itemAnimation = trigger('itemAnimation', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0, transform: 'translateY(20px)' })], { optional: true }),

    query(':enter', [
      style({ opacity: 0 }),
      stagger(100, [
        animate('0.5s', style({ opacity: 1, transform: 'translateY(0px)' }))
      ])
    ], { optional: true })
  ])
])
