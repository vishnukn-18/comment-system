import { asNativeElements, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  output: any;
  data: any = [];
  replied: any = false;
  edit: any = false;
  time: any;

  constructor(private router: Router) {}
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.signupForm.setErrors({
      invalidLogin: false,
    });

    let user = this.signupForm.value.name;
    let pass = this.signupForm.value.comment;
    var d = new Date();
    let time = d.toLocaleTimeString();
    this.data.push({
      user,
      pass,
      time,
    });

    localStorage.setItem('Name', JSON.stringify(this.data));
    this.total1 = localStorage.getItem('Name');
    this.total3 = JSON.parse(this.total1);
    this.signupForm.reset();
  }
  // total: any = localStorage.setItem('Name', JSON.stringify(this.data));
  total1: any = localStorage.getItem('Name');
  total3: any = JSON.parse(this.total1);
  editcomment(i: any) {
    document.querySelectorAll('textarea')[i]?.removeAttribute('disabled');
  }
  replaycomment() {
    this.replied = true;
  }

  logout() {
    this.router.navigate(['']);
    localStorage.removeItem('Name');
  }
}
