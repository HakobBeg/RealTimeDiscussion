import { Component, OnInit } from '@angular/core';
import {labelTexts} from '../../../definitions';
import {Router} from '@angular/router';
import {startAnimationTrigger} from '../../../Animations/simpleAnimations';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  animations: [startAnimationTrigger]
})
export class StartPageComponent implements OnInit {

  state = 'show';
  labelText = 'Welcome to "Discuss it".';


  constructor(private route: Router) { }


  ngOnInit() {
    let index = 0;
    const interval = setInterval(() => {
      if (this.state === 'show') {
        this.state = 'hide';
      } else {
        if (index === labelTexts.length) {
          clearInterval(interval);
          setTimeout(() => {
            this.route.navigate(['home']);
          }, 100);
        }
        this.labelText = labelTexts[index++];
        this.state = 'show';
      }
    }, 1500);
  }

}
