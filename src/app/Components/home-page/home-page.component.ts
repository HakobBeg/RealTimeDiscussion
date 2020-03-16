import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {navbarAnimationtrigger} from '../../../Animations/simpleAnimations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [navbarAnimationtrigger]
})
export class HomePageComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
