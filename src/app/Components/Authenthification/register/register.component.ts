import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  pass: string;
  passRep: string;
  displayName: string;

  constructor(private authService: AuthService) {
  }

  register() {
    this.authService.register(this.email, this.pass);
  }

  ngOnInit() {
  }

}
