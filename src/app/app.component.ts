import {Component, OnInit} from '@angular/core';
import {startAnimationTrigger} from '../Animations/simpleAnimations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [startAnimationTrigger]
})
export class AppComponent implements OnInit {
  title = 'RTDiscussion';



  ngOnInit(): void {



  }
}
