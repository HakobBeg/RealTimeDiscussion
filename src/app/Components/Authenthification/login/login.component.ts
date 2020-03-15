import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  login: string;
  pass: string;

  constructor(private authService: AuthService) {
  }

  signIn() {
      this.authService.login(this.login, this.pass);
  }


  ngOnInit() {
  }

}
