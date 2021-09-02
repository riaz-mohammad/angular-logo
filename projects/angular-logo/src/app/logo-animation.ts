import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';



export const logoAnimation = trigger('logoAnimation', [
  state('true', style({
    transform: 'translateX(-75%)'
  })),
  
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(1.3)'
    }),

    animate('1000ms ease', style({
      opacity: 1,
      transform: 'scale(1)'
    }))
  ]),
  transition('* => true', [
    animate('600ms 400ms ease')
  ])
]);


export const logoWordsAnimation = trigger('logoWordsAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-70%)',
    }),

    animate(
      '1000ms 200ms ease',
      keyframes([
        style({opacity: 0,  offset: .9}),
        style({ opacity: 1,transform: 'translateX(0%)', offset: 1})
      ])
    ),
  ]),
]);