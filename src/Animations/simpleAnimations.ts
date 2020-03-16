import {trigger, state, transition, style, animate} from '@angular/animations';


export const startAnimationTrigger = trigger('startAnimationTrigger', [
  state('hide', style({opacity: 0})),
  state('show', style({opacity: 1})),

  transition('void => hide', animate(1500)),
  transition('void => show', animate(1500)),
  transition('hide => show', animate(800)),
  transition('show => hide', animate(1500)),


]);


export const navbarAnimationtrigger = trigger('navAnimateTrigger', [
  state('fullSc', style({width: '100vw'})),
  state('zero', style({width: '0vw'})),

  transition('void => fullSc', animate(400)),


]);
