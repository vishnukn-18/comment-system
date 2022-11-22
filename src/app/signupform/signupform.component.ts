import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css'],
})
export class SignupformComponent {
  user: any;
 pass: any;
 valid = false;

  constructor(private authService: AuthService, private router: Router) {}
  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.signupForm.setErrors({
      invalidLogin: false,
    });

    this.user = this.signupForm.value.username;
    this.pass = this.signupForm.value.password;

    console.log(this.signupForm.value.password);
   this.authService.login(this.user, this.pass).subscribe((data) => {
    console.log('Is Login Success: ' + data);
    if (data) {
     this.router.navigate(['/comments'])
    }
    else {
     this.valid = true;
    }
     
     
    });
  }
}
