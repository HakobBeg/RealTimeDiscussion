import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;


  constructor(public authService: AuthService) {
  }


  onSubmit() {
    this.authService.register(this.regForm.get('email').value, this.regForm.get('password').value, this.regForm.get('firstName').value
      + ' ' + this.regForm.get('lastName').value);
  }

  ngOnInit() {

    this.regForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      repPassword: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required)
    });


  }

}

